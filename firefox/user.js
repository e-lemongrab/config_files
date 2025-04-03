/****************************************************************************
 * SECTION: GENERAL                                                        *
****************************************************************************/
user_pref("content.notify.interval", 100000);

/****************************************************************************
 * SECTION: GFX                                                            *
****************************************************************************/
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);
user_pref("browser.tabs.hoverPreview.enabled", false);
user_pref("browser.tabs.hoverPreview.showThumbnails", false);

/****************************************************************************
 * SECTION: DISK CACHE                                                     *
****************************************************************************/
user_pref("browser.cache.disk.enable", false);

/****************************************************************************
 * SECTION: MEDIA CACHE                                                    *
****************************************************************************/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/****************************************************************************
 * SECTION: IMAGE CACHE                                                    *
****************************************************************************/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/****************************************************************************
 * SECTION: NETWORK                                                         *
****************************************************************************/
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.trr.confirmation_telemetry_enabled", false);
user_pref("network.trr.custom_uri", "https://dns.mullvad.net/dns-query");
user_pref("network.trr.mode", 3);
user_pref("network.trr.uri", "https://dns.mullvad.net/dns-query");

/****************************************************************************
 * SECTION: FIREFOX CONFIGURATION                                           *
****************************************************************************/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.aboutwelcome.didSeeFinalScreen", true);
user_pref("browser.bookmarks.addedImportButton", true);
user_pref("browser.bookmarks.editDialog.confirmationHintShowCount", 3);
user_pref("browser.bookmarks.restore_default_bookmarks", false);
user_pref("browser.bookmarks.showMobileBookmarks", false);
user_pref("browser.compactmode.show", true);
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
user_pref("browser.laterrun.enabled", true);
user_pref("browser.newtab.extensionControlled", true);
user_pref("browser.newtab.privateAllowed", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint",);
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);
user_pref("browser.newtabpage.pinned",);
user_pref("browser.newtabpage.storageVersion", 1);
user_pref("browser.pageActions.persistedActions", {"ids":["bookmark","_testpilot-containers"],"idsInUrlbar":["_testpilot-containers","bookmark"],"idsInUrlbarPreProton":[],"version":1});
user_pref("browser.pagethumbnails.storage_version", 3);
user_pref("browser.proton.toolbar.version", 3);
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "https://127.0.0.1");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.advisoryName", "No Google Safe Browsing");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "https://127.0.0.1");
user_pref("browser.safebrowsing.provider.google.gethashURL", "https://127.0.0.1");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "https://127.0.0.1");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "https://127.0.0.1");
user_pref("browser.safebrowsing.provider.google.reportURL", "https://127.0.0.1");
user_pref("browser.safebrowsing.provider.google.updateURL", "https://127.0.0.1");
user_pref("browser.safebrowsing.provider.google4.advisoryName", "No Google Safe Browsing");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "https://127.0.0.1");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "https://127.0.0.1");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "https://127.0.0.1");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "https://127.0.0.1");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "https://127.0.0.1");
user_pref("browser.safebrowsing.provider.google4.reportURL", "https://127.0.0.1");
user_pref("browser.safebrowsing.provider.google4.updateURL", "https://127.0.0.1");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "https://127.0.0.1");
user_pref("browser.safebrowsing.provider.mozilla.lists",);
user_pref("browser.safebrowsing.provider.mozilla.updateURL",);
user_pref("browser.safebrowsing.reportPhishURL", "https://127.0.0.1");

/****************************************************************************
 * SECTION: SEARCH CONFIGURATION                                            *
****************************************************************************/
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.totalSearches", 23);
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");
user_pref("browser.urlbar.placeholderName.private", "DuckDuckGo");
user_pref("browser.urlbar.quicksuggest.migrationVersion", 2);
user_pref("browser.urlbar.quicksuggest.scenario", history);
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
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.was_ever_enabled", true);
user_pref("privacy.history.custom", true);
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.query_stripping.enabled.pbmode", true);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.trackingprotection.emailtracking.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.userContext.enabled", false);
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

/****************************************************************************
 * SECTION: SECURITY                                                        *
****************************************************************************/
user_pref("security.app_menu.recordEventTelemetry", false);
// Disable third-party cookies (only first-party cookies allowed)
user_pref("network.cookie.cookieBehavior", 1);

// Enable Tracking Protection (TP) to block known trackers
user_pref("privacy.trackingprotection.enabled", true);

// Resist fingerprinting (limits device/browser information leakage)
user_pref("privacy.resistFingerprinting", true);

// Disable geolocation requests
user_pref("geo.enabled", false);

// Disable WebAssembly SIMD feature (for potential security reasons)
user_pref("javascript.options.wasm.simd", false);

// Disable auto-play of media (videos, audio, etc.)
user_pref("media.autoplay.default", 1);

// Enable Enhanced Tracking Protection (ETP) in Private Browsing Mode
user_pref("privacy.trackingprotection.pbmode.enabled", true);

// Block social media widgets (e.g., Facebook, Twitter) from tracking you across sites
user_pref("privacy.socialtracking.block", true);

// Disable access to clipboard for websites
user_pref("dom.allow_cut_copy", false);

// Disable Telemetry (no data sent to Mozilla)
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
// Disable DNS prefetching to prevent potential leaks
user_pref("network.dns.disablePrefetch", true);
// Enable HTTPS-Only Mode (forces HTTPS for all connections)
user_pref("dom.security.https_only_mode", true);
// Block WebRTC leaks (prevent IP address leaks via WebRTC)
user_pref("media.peerconnection.enabled", false);
// Disable access to WebRTC media devices (camera and microphone)
user_pref("media.navigator.permission.disabled", true);
// Disable automatic recording of events related to certificate errors
user_pref("security.certerrors.recordEventTelemetry", false);
// Disable automatic event recording for protection popups
user_pref("security.protectionspopup.recordEventTelemetry", false);
// Block remote audio recording (WebAudio API)
user_pref("media.navigator.streams.fake", true);
// Disable WebSockets API to prevent persistent connections
user_pref("network.websocket.enabled", false);
// Disable screen capture (prevent websites from accessing your screen)
user_pref("media.getusermedia.screensharing.enabled", false);
// Block all media stream access (camera, microphone, screen)
user_pref("media.navigator.permission.disabled", true);
// Disable capturing from canvas and video elements (track mouse movements)
user_pref("media.capture.mouse", false);
/****************************************************************************
 * SECTION: SERVICES                                                        *
****************************************************************************/
user_pref("services.settings.clock_skew_seconds", 7);
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.passwords", false);
user_pref("services.sync.engine.prefs.modified", false);
user_pref("services.sync.engine.tabs", false);
user_pref("services.sync.forms.lastSync", 0);
user_pref("services.sync.globalScore", 0);

/****************************************************************************
 * SECTION: TELEMETRY & DATA COLLECTION                                      *
****************************************************************************/
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.pioneer-new-studies-available", false);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.info", false);
user_pref("toolkit.telemetry.os", false);
user_pref("toolkit.telemetry.sync.enabled", false);
