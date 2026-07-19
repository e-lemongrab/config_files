/****************************************************************************
 * SECTION: GENERAL                                                        *
 ****************************************************************************/
// Reduce how often Firefox checks for content to display (200ms = default).
// Higher values = slightly less CPU during complex page rendering, no visible
// slowdown for normal browsing.
user_pref("content.notify.interval", 200000);

// Session store snapshot interval (was 60s → 120s). Reduces disk I/O on long
// sessions; restore on crash is still reliable.
user_pref("browser.sessionstore.interval", 120000);

/****************************************************************************
 * SECTION: GFX                                                            *
 ****************************************************************************/
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 120);
user_pref("browser.tabs.hoverPreview.enabled", false);
user_pref("browser.tabs.hoverPreview.showThumbnails", false);

/****************************************************************************
 * SECTION: DISK CACHE                                                     *
 ****************************************************************************/
user_pref("browser.cache.disk.enable", true);
// Increase disk cache cap from default (~500MB) to 2GB. More cache hits
// = fewer network requests. Auto-evicts on disk pressure.
user_pref("browser.cache.disk.capacity", 2097152);
user_pref("browser.cache.disk.smart_size.enabled", false);  // use fixed 2GB
user_pref("browser.cache.disk.flush_interval", 10000);

/****************************************************************************
 * SECTION: MEDIA CACHE                                                    *
 ****************************************************************************/
// 128MB memory cache (up from 64MB default). Keeps more media decoded in RAM.
user_pref("media.memory_cache_max_size", 131072);
// Aggressive pre-readahead for video/audio: buffer 60s ahead (up from 15s).
user_pref("media.cache_readahead_limit", 28800);
user_pref("media.cache_resume_threshold", 14400);

/****************************************************************************
 * SECTION: IMAGE CACHE                                                    *
 ****************************************************************************/
user_pref("image.mem.decode_bytes_at_a_time", 65536);
// Increase image cache limit from default 50MB to 250MB. Keeps more images
// in memory, avoids re-decode on scroll/tab-switch.
user_pref("image.cache.size", 262144);

/****************************************************************************
 * SECTION: NETWORK                                                         *
 ****************************************************************************/
// Increased from 384 to 512 for high-end systems.
user_pref("network.http.max-connections", 512);
user_pref("network.http.max-connections-per-server", 64);
user_pref("network.http.max-persistent-connections-per-server", 16);

// Disable HTTP request pacing (was already false, explicit for clarity).
// Pacing adds artificial delays; disabling it speeds up page loads on
// modern networks without causing issues.
user_pref("network.http.pacing.requests.enabled", false);

user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
// DNS cache: 1 hour (default is 3min). Reduces DNS lookups for repeat visits.
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

// Pre-fetching / predictive loading: disabled. No privacy cost, neutral for
// performance since the user controls navigation.
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

// DO Not Track header
user_pref("network.trr.confirmation_telemetry_enabled", false);

// DNS-over-HTTPS: fallback mode (3). Uses TRR only when the native DNS
// resolver fails. Privacy without breaking local DNS.
user_pref("network.trr.mode", 3);
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
// user_pref("network.trr.uri", "https://dns.mullvad.net/dns-query");
user_pref("network.trr.bootstrapAddress", "9.9.9.9");

// Speculative connections: disabled. No pre-resolving hostnames for links
// the user hasn't clicked. Zero privacy cost.
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("network.http.speculative-parallel.limit", 0);

// No captive-portal or connectivity-service pings
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

// Punycode: always show to prevent IDN homograph attacks
user_pref("network.IDN_show_punycode", true);

/****************************************************************************
 * SECTION: FIREFOX CONFIGURATION                                           *
 ****************************************************************************/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.aboutwelcome.didSeeFinalScreen", true);
user_pref("browser.bookmarks.addedImportButton", true);
user_pref("browser.bookmarks.restore_default_bookmarks", false);
user_pref("browser.bookmarks.showMobileBookmarks", false);
user_pref("browser.compactmode.show", true);
// Content blocking: strict. Blocks all trackers, cryptominers, fingerprinters.
user_pref("browser.contentblocking.category", "strict");

user_pref("browser.ctrlTab.sortByRecentlyUsed", true);
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.panel.shown", true);
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.viewableInternally.typeWasRegistered.avif", true);
user_pref("browser.download.viewableInternally.typeWasRegistered.webp", true);
user_pref("browser.firefox-view.feature-tour", {"screen":"","complete":true});
user_pref("browser.firefox-view.view-count", 1);
user_pref("browser.formfill.enable", false);
// laterrun: suppress "Firefox is your default browser" prompt
user_pref("browser.laterrun.enabled", true);
user_pref("browser.newtab.extensionControlled", true);
user_pref("browser.newtab.privateAllowed", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);
user_pref("browser.newtabpage.pinned", "[]");
user_pref("browser.newtabpage.storageVersion", 1);
user_pref("browser.pageActions.persistedActions", {"ids":["bookmark","_testpilot-containers"],"idsInUrlbar":["_testpilot-containers","bookmark"],"idsInUrlbarPreProton":[],"version":1});
user_pref("browser.pagethumbnails.storage_version", 3);
user_pref("browser.proton.toolbar.version", 3);

// SafeBrowsing: KEEP enabled. DNS-level protection (Quad9) is NOT a
// replacement. SafeBrowsing checks every URL/download in real time.
// Disabling it leaves you vulnerable to phishing and malicious downloads.
user_pref("browser.safebrowsing.downloads.enabled", true);
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);
// Remote check for safe browsing (local database only = less privacy cost
// but still catches known bad URLs).
user_pref("browser.safebrowsing.downloads.remote.enabled", true);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", true);
user_pref("browser.safebrowsing.blockedURIs.enabled", true);
user_pref("browser.safebrowsing.allowOverride", false);

user_pref("browser.sidebar.position", "right");
user_pref("browser.sidebar.visible", true);

// Pocket: completely disabled (no network calls, no content injection)
user_pref("extensions.pocket.enabled", false);

/****************************************************************************
 * SECTION: SEARCH CONFIGURATION                                            *
 ****************************************************************************/
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.totalSearches", 23);
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");
user_pref("browser.urlbar.placeholderName.private", "DuckDuckGo");
user_pref("browser.urlbar.quicksuggest.migrationVersion", 2);
user_pref("browser.urlbar.quicksuggest.scenario", "history");
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.topsites", false);

/****************************************************************************
 * SECTION: PRIVACY CONFIGURATION                                           *
 ****************************************************************************/
user_pref("privacy.annotate_channels.strict_list.enabled", true);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", false);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.clearOnShutdown_v2.siteSettings", true);

// Do Not Track header sent with every request
user_pref("privacy.donottrackheader.enabled", true);

// Anti-fingerprinting: break site-level tracking without breaking sites
user_pref("privacy.fingerprintingProtection", true);

// Global Privacy Control (GPC): signals "do not sell my data" via HTTP header
user_pref("privacy.globalprivacycontrol.enabled", true);

// Custom history (intercepts back/forward navigation, reduces telemetry)
user_pref("privacy.history.custom", true);

// Strip tracking params from URLs before sending
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.query_stripping.enabled.pbmode", true);

// Sanitize on shutdown: clear site data (not cookies/sessions — those stay
// for convenience). Covers caches, offline storage, service workers.
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

// Email & social tracking protection
user_pref("privacy.trackingprotection.emailtracking.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

// Container tabs enabled
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

// First-Party Isolation: disabled for daily-use balance. Modern partitioning
// (privacy.partition.*) provides equivalent isolation with less breakage.
user_pref("privacy.firstparty.isolate", false);

/****************************************************************************
 * SECTION: SECURITY                                                        *
 ****************************************************************************/
user_pref("security.app_menu.recordEventTelemetry", false);

// Cookie behavior: reject third-party cookies always (behavior = 1)
user_pref("network.cookie.cookieBehavior", 1);

// ETP enabled globally
user_pref("privacy.trackingprotection.enabled", true);

// RFP: disabled for daily use. Keeps font/screen resolution accurate so
// sites work correctly. Partitioning provides isolation without full RFP.
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.resistFingerprinting.letterboxing", false);

// Geo: OS-level disabled; permissions default to deny
user_pref("geo.enabled", false);
user_pref("permissions.default.geo", 2);

// SIMD/WASM: enabled for performance (WebAssembly apps/games)
user_pref("javascript.options.wasm.simd", true);

// Block autoplay of media with audio
user_pref("media.autoplay.default", 1);

// ETP in private browsing
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.socialtracking.block", true);

// Session store: don't store URLs in session restore
user_pref("browser.sessionstore.privacy_level", 2);

// Don't send HTTP Referer pings
user_pref("browser.send_pings", false);

// Block camera, microphone, screen, XR, desktop notifications by default
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.screen", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.xr", 2);

// Telemetry disabled
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.pioneer-new-studies-available", false);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.info", false);
user_pref("toolkit.telemetry.os", false);
user_pref("toolkit.telemetry.sync.enabled", false);

// HTTPS-Only Mode: ON for all windows (not just private)
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);

// WebRTC: block non-proxied UDP (leaks local IP)
user_pref("media.peerconnection.enabled", false);
user_pref("media.navigator.enabled", false);

// Certificate error telemetry: off
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("security.protectionspopup.recordEventTelemetry", false);

// Fake camera/mic stream (prevents sites from detecting hardware absence)
user_pref("media.navigator.streams.fake", true);

// WebSocket: enabled (required for chat apps, live dashboards, games)
user_pref("network.websocket.enabled", true);

// Screensharing: disabled by default
user_pref("media.getusermedia.screensharing.enabled", false);
// Disable navigator permission queries (prevents fingerprinting probe)
user_pref("media.navigator.permission.disabled", true);
// Mouse capture: disabled
user_pref("media.capture.mouse", false);

// Services sync: all disabled (not using Firefox Sync)
user_pref("services.settings.clock_skew_seconds", 7);
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.passwords", false);
user_pref("services.sync.engine.prefs.modified", false);
user_pref("services.sync.engine.tabs", false);
user_pref("services.sync.forms.lastSync", 0);
user_pref("services.sync.globalScore", 0);

// TLS minimum: 1.2 (value=4). TLS 1.0/1.1 are broken.
// Do NOT set to 3 (TLS 1.0) — that is a security regression.
user_pref("security.tls.version.min", 4);
// TLS maximum: 1.3 (value=4, default in FF152). Explicit for clarity.
user_pref("security.tls.version.max", 4);

// Password manager: enabled
user_pref("signon.rememberSignons", true);

// Battery API: disabled (fingerprinting vector)
user_pref("dom.battery.enabled", false);
// Web notifications: disabled globally (per-site permission still works
// if manually allowed)
user_pref("dom.webnotifications.enabled", false);
// Push: disabled (tracking vector)
user_pref("dom.push.enabled", false);

// Referrer policy: no cross-site referrer
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.trimmingPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
// HTTPS-only: don't send HTTP requests as background probes
user_pref("dom.security.https_only_mode_send_http_background_request", false);
// Delegation: sites can't auto-grant permissions via delegation
user_pref("permissions.delegation.enabled", false);

// WebGL: enabled for compatibility (games, 3D viewers, map rendering)
// The isolation prefs below limit what WebGL can leak.
user_pref("webgl.disabled", false);

// Sensors, gamepad, network info: disabled (fingerprinting vectors)
user_pref("device.sensors.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.netinfo.enabled", false);

// DRM / Widevine: disabled (breaks Netflix, Spotify Web, etc.).
// Enable only if you need DRM content:
//   user_pref("media.eme.enabled", true);
//   user_pref("media.gmp-widevinecdm.enabled", true);
user_pref("media.eme.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);

// Beacon API: disabled (prevents navigator.sendBeacon() tracking)
user_pref("beacon.enabled", false);
user_pref("dom.private-attribution.submission.enabled", false);
user_pref("dom.private-attribution.reporting.enabled", false);

// Font visibility: normal for regular browsing, strict only under RFP
user_pref("layout.css.font-visibility.standard", 3);
user_pref("layout.css.font-visibility.trackingprotection", 3);
user_pref("layout.css.font-visibility.private", 3);
user_pref("layout.css.font-visibility.resistFingerprinting", 1);

// SSL: require secure negotiation (block downgrade attacks)
user_pref("security.ssl.require_safe_negotiation", true);

// Partition caches, connections, service workers, and non-cookie storage
user_pref("privacy.partition.network_state", true);
user_pref("privacy.partition.serviceWorkers", true);
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true);
