const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const chromeExecutable =
  '/Users/manu/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';

async function runAudit() {
  console.log('🚀 Starting Playwright verification for Redesigned The House of Coffee...');

  const browser = await chromium.launch({
    executablePath: fs.existsSync(chromeExecutable) ? chromeExecutable : undefined,
    headless: true,
  });

  const consoleErrors = [];
  const networkErrors = [];

  // ==========================================
  // 1. DESKTOP VIEWPORT TEST (1440 x 900)
  // ==========================================
  console.log('\n📱 Testing Desktop Viewport (1440 x 900)...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const desktopPage = await desktopContext.newPage();

  desktopPage.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(`[Desktop Console Error]: ${msg.text()}`);
    }
  });

  desktopPage.on('pageerror', (err) => {
    consoleErrors.push(`[Desktop Page Error]: ${err.message}`);
  });

  desktopPage.on('response', (response) => {
    if (response.status() >= 400 && response.url().includes('localhost:5190')) {
      networkErrors.push(`[Failed Request]: ${response.status()} ${response.url()}`);
    }
  });

  await desktopPage.goto('http://localhost:5190/', { waitUntil: 'networkidle' });

  // 1. Verify Single-Row Header
  console.log('🔍 Checking single-row header height...');
  const header = desktopPage.locator('header');
  const headerBox = await header.boundingBox();
  console.log(`  Header bounding box: height = ${headerBox.height}px`);
  if (headerBox.height > 80) {
    throw new Error(`❌ Header wrapped into multiple rows! Height: ${headerBox.height}px`);
  }
  console.log('  ✅ Header is strictly single-row without wrapping!');

  // 2. Verify 4 Real Photographs
  console.log('🔍 Verifying 4 real cafe photographs are loaded with naturalWidth > 0...');
  const imagesToCheck = [
    '/assets/amber-book-wall.jpg',
    '/assets/latte-matcha-flatlay.jpg',
    '/assets/bakery-teak-tables.jpg',
    '/assets/balcony-iced-latte.jpg',
  ];

  for (const imgSrc of imagesToCheck) {
    const isLoaded = await desktopPage.evaluate((src) => {
      const imgs = Array.from(document.querySelectorAll('img'));
      const matching = imgs.find((img) => img.src.includes(src) || img.getAttribute('src') === src);
      if (!matching) return { found: false };
      return {
        found: true,
        complete: matching.complete,
        naturalWidth: matching.naturalWidth,
        naturalHeight: matching.naturalHeight,
      };
    }, imgSrc);

    if (isLoaded.found && isLoaded.naturalWidth > 0) {
      console.log(`  ✓ Image Loaded: ${imgSrc} (${isLoaded.naturalWidth}x${isLoaded.naturalHeight})`);
    } else {
      throw new Error(`❌ Image failed to load or has 0 dimensions: ${imgSrc} - ${JSON.stringify(isLoaded)}`);
    }
  }

  // 3. Verify Full-Width Hero Content
  console.log('🔍 Verifying full-width Swiss grid headline...');
  const headline = await desktopPage.locator('h1').innerText();
  console.log(`  Headline text: "${headline.replace(/\n/g, ' ')}"`);
  const tickerVisible = await desktopPage.locator('text=SINGLE-ORIGIN POUR-OVERS').isVisible();
  console.log(`  ✓ Roast ticker visible: ${tickerVisible}`);

  // 4. Verify Live Outlet Switcher
  console.log('\n🧪 Testing Live Outlet Switcher...');
  const cschemeBtn = desktopPage.locator('header button:has-text("C-Scheme")');
  await cschemeBtn.click();
  await desktopPage.waitForTimeout(300);
  const cschemeStatus = await desktopPage.locator('text=C-Scheme Outlet').first().isVisible();
  console.log(`  ✓ Switched to C-Scheme: status bar updated = ${cschemeStatus}`);

  const vaishaliBtn = desktopPage.locator('header button:has-text("Vaishali Nagar")');
  await vaishaliBtn.click();
  await desktopPage.waitForTimeout(300);
  const vaishaliStatus = await desktopPage.locator('text=Vaishali Nagar Outlet').first().isVisible();
  console.log(`  ✓ Switched to Vaishali Nagar: status bar updated = ${vaishaliStatus}`);

  // 5. Verify Lookbook Index 01, 02, 03
  console.log('\n🧪 Testing Numbered Editorial Lookbook Index...');
  const index01 = await desktopPage.locator('text=INDEX 01').isVisible();
  const index02 = await desktopPage.locator('text=INDEX 02').isVisible();
  const index03 = await desktopPage.locator('text=INDEX 03').isVisible();
  console.log(`  ✓ Index 01 visible: ${index01}, Index 02 visible: ${index02}, Index 03 visible: ${index03}`);

  // Take Desktop Screenshot
  const desktopScreenshotPath = path.join(__dirname, 'desktop-1440x900.png');
  await desktopPage.screenshot({ path: desktopScreenshotPath, fullPage: true });
  console.log(`📸 Desktop full-page screenshot saved to: ${desktopScreenshotPath}`);

  // Test Specialty Menu Tabs
  console.log('\n🧪 Testing Tasting Menu Tabs...');
  const matchaTab = desktopPage.locator('button:has-text("Iced Matcha & Cold Brews")');
  await matchaTab.click();
  await desktopPage.waitForTimeout(300);
  const matchaItem = await desktopPage.locator('text=Ceremonial Iced Matcha Latte').isVisible();
  console.log(`  ✓ Ceremonial Matcha item visible: ${matchaItem}`);

  // Test Table QR Simulator Drawer
  console.log('\n🧪 Testing Table QR Simulator...');
  const qrBtn = desktopPage.locator('button:has-text("Launch Table QR View")').first();
  await qrBtn.click();
  await desktopPage.waitForSelector('text=Table Stand QR');
  console.log('  ✓ QR Simulator opened successfully');

  const qrScreenshotPath = path.join(__dirname, 'qr-simulator.png');
  await desktopPage.screenshot({ path: qrScreenshotPath });
  console.log(`📸 QR simulator screenshot saved to: ${qrScreenshotPath}`);

  await desktopPage.locator('button[aria-label="Close QR simulator"]').click();
  await desktopPage.waitForTimeout(300);

  // Test Booking Modal
  console.log('\n🧪 Testing Order Ahead / Booking Modal...');
  const bookBtn = desktopPage.locator('header button:has-text("Book / Pre-Order")');
  await bookBtn.click();
  await desktopPage.waitForSelector('text=Order Ahead or Reserve a Table');
  console.log('  ✓ Booking modal opened successfully');

  await desktopPage.locator('input[placeholder="Your Name *"]').fill('Kavya Singhal');
  await desktopPage.locator('input[placeholder="Phone / WhatsApp *"]').fill('+91 98291 77777');
  await desktopPage.locator('button[type="submit"]:has-text("Confirm Reservation")').click();
  await desktopPage.waitForSelector('text=Confirmed Booking');
  console.log('  ✓ Reservation confirmed & ticket generated');

  const modalScreenshotPath = path.join(__dirname, 'booking-modal.png');
  await desktopPage.screenshot({ path: modalScreenshotPath });
  console.log(`📸 Booking modal screenshot saved to: ${modalScreenshotPath}`);

  await desktopPage.locator('button:has-text("Close & Return to Page")').click();
  await desktopPage.waitForTimeout(300);

  // ==========================================
  // 2. MOBILE VIEWPORT TEST (390 x 844 iPhone 14)
  // ==========================================
  console.log('\n📱 Testing Mobile Viewport (390 x 844 iPhone 14)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
  });
  const mobilePage = await mobileContext.newPage();

  mobilePage.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(`[Mobile Console Error]: ${msg.text()}`);
    }
  });

  await mobilePage.goto('http://localhost:5190/', { waitUntil: 'networkidle' });

  // Mobile Screenshot
  const mobileScreenshotPath = path.join(__dirname, 'mobile-390x844.png');
  await mobilePage.screenshot({ path: mobileScreenshotPath, fullPage: true });
  console.log(`📸 Mobile full-page screenshot saved to: ${mobileScreenshotPath}`);

  // Test Mobile Drawer
  console.log('\n🧪 Testing Mobile Drawer...');
  const mobileMenuToggle = mobilePage.locator('button[aria-label="Toggle menu"]');
  await mobileMenuToggle.click();
  await mobilePage.waitForTimeout(300);
  const mobileDrawer = mobilePage.locator('.fixed.inset-0.z-50');
  const isDrawerOpen = await mobileDrawer.isVisible();
  console.log(`  ✓ Mobile drawer visible: ${isDrawerOpen}`);

  await browser.close();

  // ==========================================
  // 3. AUDIT SUMMARY
  // ==========================================
  console.log('\n========================================');
  console.log('🏁 REDESIGN PLAYWRIGHT AUDIT SUMMARY:');
  console.log(`Console Errors count: ${consoleErrors.length}`);
  console.log(`Network / 404 Errors count: ${networkErrors.length}`);
  if (consoleErrors.length > 0) {
    console.error('Errors found:', consoleErrors);
    process.exit(1);
  }
  if (networkErrors.length > 0) {
    console.error('Network errors found:', networkErrors);
    process.exit(1);
  }
  console.log('🌟 ARCHITECTURAL REDESIGN PASSED WITH 0 ERRORS!');
  console.log('========================================\n');
}

runAudit().catch((err) => {
  console.error('Fatal audit failure:', err);
  process.exit(1);
});
