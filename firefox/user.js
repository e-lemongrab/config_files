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
user_pref("network.http.max-connections", 256);

user_pref("network.http.max-persistent-connections-per-server", 6);

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

user_pref("network.trr.mode", 3);
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
//user_pref("network.trr.uri", "https://dns.mullvad.net/dns-query");
user_pref("network.trr.bootstrapAddress", "9.9.9.9");

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
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);
user_pref("browser.newtabpage.pinned", "[]");
user_pref("browser.newtabpage.storageVersion", 1);
user_pref("browser.pageActions.persistedActions", {"ids":["bookmark","_testpilot-containers"],"idsInUrlbar":["_testpilot-containers","bookmark"],"idsInUrlbarPreProton":[],"version":1});
user_pref("browser.pagethumbnails.storage_version", 3);
user_pref("browser.proton.toolbar.version", 3);
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);

user_pref("browser.safebrowsing.downloads.enabled", false); // rely on quad9
user_pref("browser.safebrowsing.malware.enabled", false); // rely on quad9
user_pref("browser.safebrowsing.phishing.enabled", false); // rely on quad9

user_pref("browser.sidebar.position", "right");
user_pref("browser.sidebar.visible", true);

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

user_pref("privacy.clearOnShutdown.cookies", true);

user_pref("privacy.clearOnShutdown.offlineApps", true);

user_pref("privacy.clearOnShutdown.sessions", true);

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
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

user_pref("privacy.userContext.enabled", true);

user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

/****************************************************************************
 * SECTION: SECURITY                                                        *
****************************************************************************/
user_pref("security.app_menu.recordEventTelemetry", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.resistFingerprinting", true);
user_pref("geo.enabled", false);
user_pref("javascript.options.wasm.simd", false);
user_pref("media.autoplay.default", 1);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.socialtracking.block", true);

// (your file had dom.allow_cut_copy commented out, leaving as-is)

user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("dom.security.https_only_mode", true);
user_pref("media.peerconnection.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("security.protectionspopup.recordEventTelemetry", false);
user_pref("media.navigator.streams.fake", true);
user_pref("network.websocket.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.navigator.permission.disabled", true);
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

/****************************************************************************
 * SECTION: NEW HARDENING LINES                                             *
****************************************************************************/
+user_pref("privacy.firstparty.isolate", true); // [PRIVACY CONFIGURATION]
+user_pref("security.tls.version.min", 3);      // [SECURITY]
+user_pref("security.tls.version.max", 4);      // [SECURITY]
+user_pref("gfx.downloadable_fonts.enabled", false); // [GFX]
+user_pref("font.internaluseonly", true);           // [GFX]
+user_pref("signon.rememberSignons", false);        // [SECURITY]
+user_pref("extensions.pocket.enabled", false);     // [FIREFOX CONFIGURATION]
+user_pref("privacy.resistFingerprinting.aggressive", true); // [SECURITY]
+user_pref("canvas.poisondata", "");                // [SECURITY]
+user_pref("dom.battery.enabled", false);           // [SECURITY]
+user_pref("dom.webnotifications.enabled", false);  // [SECURITY]
+user_pref("dom.push.enabled", false);              // [SECURITY]
/****************************************************************************
 * SECTION: PRIVACY CONFIGURATION (isolation & partitioning)
****************************************************************************/
+user_pref("privacy.resistFingerprinting.letterboxing", true);           // pad window size to reduce FP
+user_pref("privacy.partition.network_state", true);                     // partition caches, connections
+user_pref("privacy.partition.serviceWorkers", true);                    // partition SW scope/storage
+user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true); // partition more non-cookie storage

/****************************************************************************
 * SECTION: SECURITY (referrer, HTTPS, permissions)
****************************************************************************/
+user_pref("network.http.referer.XOriginPolicy", 2);                     // no referrer sent cross-site
+user_pref("network.http.referer.trimmingPolicy", 2);                    // strip path & query from referrer
+user_pref("network.http.referer.XOriginTrimmingPolicy", 2);             // enforce trimming on cross-site
+user_pref("dom.security.https_only_mode_send_http_background_request", false); // no background HTTP probes
+user_pref("permissions.delegation.enabled", false);                     // sites can't auto-grant perms

/****************************************************************************
 * SECTION: NETWORK (speculative connections, connectivity checks)
****************************************************************************/
+user_pref("browser.urlbar.speculativeConnect.enabled", false);          // stop speculative connects
+user_pref("network.http.speculative-parallel-limit", 0);                // no pre-connect bursts
+user_pref("network.captive-portal-service.enabled", false);             // no captive-portal pings
+user_pref("network.connectivity-service.enabled", false);               // no connectivity checks
+user_pref("network.IDN_show_punycode", true);                           // show punycode to avoid IDN spoofs

/****************************************************************************
 * SECTION: GFX / FINGERPRINTING
****************************************************************************/
+user_pref("webgl.disabled", true);                                      // reduce FP surface (breaks 3D/WebGL)
+user_pref("device.sensors.enabled", false);                              // disable motion/orientation sensors
+user_pref("dom.gamepad.enabled", false);                                 // gamepad FP off
+user_pref("dom.netinfo.enabled", false);                                 // hide network type/speed API

/****************************************************************************
 * SECTION: MEDIA / DRM (optional but stronger privacy)
****************************************************************************/
+user_pref("media.eme.enabled", false);                                   // disable DRM (breaks some streaming)
+user_pref("media.gmp-widevinecdm.enabled", false);                       // disable Widevine module

/****************************************************************************
 * SECTION: MISC PRIVACY
****************************************************************************/
+user_pref("beacon.enabled", false);                                      // block navigator.sendBeacon()

user_pref("layout.css.font-visibility", 1);  // "base" fonts only
user_pref("security.ssl.require_safe_negotiation", true);
