# WP Torrent Tracker - Complete Features List

https://avihs-g.github.io/wp-torrent-parser/

A powerful, production-ready BitTorrent tracker plugin for WordPress with BBPress integration, comprehensive admin tools, and flexible deployment options.

---

## 1️⃣ Core Features

### BitTorrent Announce Protocol
🔔 Full announce/scrape endpoint implementation supporting standard BitTorrent protocol with peer discovery, bandwidth reporting, and announce intervals. Clients receive optimized peer lists for efficient swarm connectivity.

### Private Tracker Support
🔒 Enterprise-grade private tracking with per-user unique passkeys, announce URL validation, and mandatory private flag enforcement. Perfect for controlled distribution networks.

### Dual Deployment Options
🚀 Deploy directly through WordPress rewrite rules for maximum compatibility, or copy announce.php/scrape.php to root directory for high-traffic tracker optimization with standalone performance.

### Bencode Support
📦 Native bencode encoding/decoding for torrent file parsing and generation. Correctly handles complex nested structures, binary data, and special characters.

### SHA1 Info Hash Calculation
🔐 Accurate torrent identification through dual-hash support (public/private variants). Prevents duplicate torrents and ensures consistent peer tracking across sessions.

### Torrent File Validation
✓ Comprehensive torrent file validation including structure checking, announce URL verification, private flag enforcement, and file integrity tests during upload.

### User Passkey System
🔑 Unique 32-character passkey per user automatically generated on registration. Users can reset passkeys anytime for enhanced security and access control.

### Upload/Download Tracking
📊 Real-time bandwidth monitoring with per-peer upload/download speed calculations. Complete transfer history stored in user metadata for ratio enforcement.

### Peer Management
🌐 Automatic peer discovery and state tracking (seeder/leecher). Configurable peer timeout (default 39 minutes) with automatic cleanup of stale connections.

### Torrent Lifecycle Management
🔄 Complete torrent lifecycle handling from upload through completion. Track seeder/leecher counts, completion numbers, and calculate swarm health metrics.

---

## 2️⃣ Admin Features

### Comprehensive Dashboard
📈 Real-time overview dashboard showing total torrents, seeders, leechers, completed transfers, network bandwidth, and swarm health indicators at a glance.

### Torrent Management Interface
🎛️ Full torrent management with search, filtering, sorting by name/size/seeders/date. Edit metadata, remove torrents, monitor seeder/leecher distribution.

### User Management & Administration
👥 Complete user roster with tracker-specific stats columns (uploaded/downloaded, ratio, status). Ban/unban users, reset passkeys, view detailed user activity.

### User Passkey Control
🔑 Admin can reset any user's passkey directly, generate new ones, and manage passkey access with per-user enforcement options.

### User Ban/Unban System
🚫 Granular user banning with status tracking. Banned users cannot announce, download, or participate in swarm. Unban anytime to restore access.

### Multi-Tab Dashboard Interface
📑 Intuitive tab-based navigation: Dashboard, Torrents, Users, Settings, Maintenance, Appearance, Diagnostics, Public Trackers Management.

### Dashboard Analytics
📊 Aggregate statistics showing global tracker metrics, transfer volumes, peer distribution, and health indicators for informed decision-making.

### Settings Management
⚙️ Configurable announce intervals (default 30 minutes), minimum intervals (60 seconds), default peers per announce (50), and advanced protocol parameters.

### Announcement URL Configuration
🌐 Set primary and secondary announce URLs with support for both rewrite rule and direct PHP file approaches. Display correct announce URLs in UI.

### Peer Timeout Configuration
⏱️ Customize peer inactivity timeout (default 39 minutes). Automatic cleanup of stale peers saves database space and maintains accurate swarm stats.

### Enable/Disable Scrape Endpoint
🔒 Control public scrape access independently. Can disable scrape to reduce tracker load while maintaining announce functionality.

### Private Flag Enforcement
🔐 Toggle mandatory private flag requirement. Enforce tracker mode where only torrents with private flag=1 are accepted.

### Announce URL Validation
✓ Toggle strict announce URL checking. Validate that torrent files contain correct tracker announce URL before processing.

### Storage Management
💾 View detailed information about upload directory, torrent file storage, database tables, and perform storage optimization tasks.

### Maintenance Tools
🛠️ Automated peer cleanup scheduler, history recording, external stats updates, and manual trigger options for maintenance tasks.

### Debug & Logging System
🐛 Optional debug mode with detailed logging of announce requests, scrape queries, errors, and system events. Download logs for analysis.

### System Diagnostics
🔍 Run comprehensive health checks including database connectivity, table status, file permissions, cron job status, and API endpoint reachability.

### Test Tools
🧪 Built-in announce/scrape testing tools to verify tracker functionality, network connectivity, and response formats.

### User Profile Integration
👤 Admin can view user tracker stats directly from WordPress user profile page with passkey display, upload/download totals, ratio.

### User Activity Tracking
📝 Track user registration date, last activity timestamp, torrent upload count, and participation history.

### Custom User Columns
📊 Add tracker-specific sortable columns to WordPress user list (uploaded, downloaded, ratio, status, passkey).

### Appearance Customization
🎨 Configure default sorting options, torrent display fields, shortcode defaults, colors, and layout preferences for public-facing displays.

### Torrent Deletion Workflow
🗑️ Confirm deletion of torrents with option to remove associated files or keep files while removing database records.

---

## 3️⃣ User Features

### Personal Passkey Display
🔑 Users see their unique passkey in profile and dashboard. Essential for configuring torrent clients with correct tracker announce URL.

### Passkey Reset Interface
🔄 Users can reset their passkey anytime through self-service interface without admin involvement. New passkey generated immediately.

### Personal Statistics Page
📊 View personal upload/download totals, transfer ratio, seeder/leecher activity, completed torrents, and contribution metrics.

### Torrent Download with Passkey Injection
📥 Downloaded .torrent files automatically include user's passkey embedded in announce URL for hassle-free client configuration.

### Torrent Upload Interface
⬆️ User-friendly torrent upload form with file validation, description field, tags, and category selection.

### Torrent File Validation Feedback
✓ Real-time feedback on torrent file validity, structure issues, and configuration problems before upload.

### Upload History
📜 View history of uploaded torrents with creation dates, current seeder/leecher status, and download statistics.

### Shortcode-Based UI
🎯 Flexible shortcode system lets admins display tracker features anywhere on site: [tracker_list], [tracker_upload], [tracker_stats], [tracker_user_stats].

### Public Torrent Browsing
📚 Browse all torrents with search functionality, sorting by seeders/leechers/date, and pagination support.

### Advanced Search
🔍 Full-text search across torrent names and descriptions with real-time result filtering and highlighting.

### Torrent Details Page
📄 Individual torrent pages showing name, size, files, seeders, leechers, completed count, comments, and upload date.

### Download Torrent Files
📥 Download .torrent files for any torrent with passkey automatically embedded based on login status.

### Transfer Statistics Display
📈 Personal dashboard showing lifetime uploaded/downloaded, current ratio, active torrents, and contribution ranking.

### Tracker Status Widget
📊 Display current network statistics on homepage: online peers, active torrents, total bandwidth, network health.

### Profile-Based Tracking
👥 User profile pages show tracker statistics alongside standard WordPress profile fields.

---

## 4️⃣ Technical Features

### REST/AJAX Architecture
🔗 Modern API endpoints for all operations. AJAX-based uploads, real-time stat updates, and dynamic form submissions.

### Database Schema
💾 Optimized database structure with tables for peers, torrents, files, and history. Supports unlimited torrents and concurrent peers.

### Custom Post Type Alternative
📝 Torrent metadata can optionally be stored as WordPress post types for better integration with WordPress ecosystem.

### Cron Job Integration
⏰ Automatic peer cleanup, history recording, and external stats updates via WordPress cron on configurable schedules.

### Custom Cron Intervals
⏱️ Flexible scheduling with 5-minute interval support for frequent maintenance tasks without overloading database.

### Bencode Library
📦 Fully functional bencode encoder/decoder written in PHP. Handles dictionaries, lists, integers, and strings correctly.

### Hash Calculation
🔐 SHA-1 based info_hash calculation. Supports both public and private torrent variant hashes for tracking.

### IP Address Handling
📍 Automatic IP address detection with override support. Handles proxy scenarios and client-supplied addresses.

### Peer Compaction
📦 Optional compact format peer lists for bandwidth-conscious clients using 6-byte per-peer binary format.

### HTTP Gzip Compression
🗜️ Automatic gzip compression on announce/scrape responses to reduce bandwidth usage.

### Request Validation
✓ Comprehensive validation of all incoming parameters, binary data handling, and security checks against malformed requests.

### Logging System
📝 Detailed request/response logging when debug mode enabled. File-based logs with automatic rotation.

### Error Handling
⚠️ Graceful error handling for malformed requests, missing parameters, invalid passkeys, and data inconsistencies.

### Performance Optimization
⚡ Database query optimization, proper indexing, and caching strategies for fast announce/scrape responses.

### Helper Functions
🔧 Extensive helper function library: format_size(), format_time(), generate_passkey(), validate_info_hash(), etc.

### Internationalization (i18n)
🌐 Full translation support with wp-torrent-tracker text domain. Complete .pot file for translators.

### WordPress Hooks System
🪝 Extensive action/filter hooks allowing customization without modifying core plugin files.

### Class Autoloading
🔄 PSR-0 style autoloader for plugin classes with automatic namespace resolution.

### External Stats Integration
🌍 Fetch seeders/leechers from public trackers. Converts UDP trackers to HTTP. Includes 40+ public tracker mappings.

---

## 5️⃣ Security Features

### User Authentication
🔐 WordPress authentication required for all tracker operations. Users must be logged in to download/upload torrents.

### Unique User Passkeys
🔑 Per-user 32-character random passkeys generated on registration. Passkey-based request validation prevents unauthorized access.

### Passkey Validation
✓ Every announce/scrape request validated against user passkey database before processing.

### User Ban System
🚫 Admin can ban users from tracker. Banned users cannot announce/scrape/participate in swarms even with valid passkey.

### .torrent MIME Type Security
📄 Proper .torrent MIME type handling with file extension validation to prevent execution attacks.

### Upload Directory Protection
🔒 Torrents uploaded to wp-content/uploads with .htaccess protection preventing direct access/execution.

### SQL Injection Prevention
🛡️ All database queries use prepared statements with proper escaping via $wpdb->prepare().

### CSRF Protection
🔐 WordPress nonce verification on all admin forms and AJAX actions.

### File Upload Validation
✓ Server-side torrent file validation with header checks, structure verification, and size limits.

### Binary Data Handling
📦 Safe binary-to-hex conversion for info_hash values. Prevents encoding attacks.

### Access Control Lists
👥 Role-based access control for admin functions. Only admins can modify settings/torrents/users.

### Permissions Checking
✓ Verify user login status before allowing any tracker operations.

### Private Tracker Mode
🔒 Enforce private tracking with announce URL validation to prevent tracker abuse.

### Debug Log Protection
🔒 Debug logs stored in protected directory with .htaccess deny rules and index.php protection.

### Torrent Download Gating
🔐 Enforce login requirement and ban check before allowing torrent file download.

### Rate Limiting
⏱️ Configurable minimum announce intervals prevent request flooding (default 60 seconds).

### Data Privacy
🔐 Personal user data (passkeys, IPs, statistics) protected and not exposed unnecessarily.

---

## 6️⃣ Integration & Compatibility Features

### WordPress 6.0+ Support
✅ Built for WordPress 6.0 and newer with modern PHP 8.0+ syntax and standards.

### PHP 8.0+ Required
⚡ Type-safe PHP 8.0+ codebase with strict type declarations. Leverages modern PHP features.

### MySQL/MariaDB Compatible
💾 Works with MySQL 5.7+, MariaDB 10.3+. Fully tested and optimized for both.

### WordPress Shortcodes
🎯 Complete shortcode system for embedding tracker features: [tracker_list], [tracker_stats], [tracker_upload], [tracker_torrent], etc.

### Media Library Integration
📁 Option to upload torrent files through WordPress media library with proper MIME type handling.

### WordPress User System
👥 Full integration with WordPress user registration, roles, and capabilities system.

### Theme Compatibility
🎨 Responsive CSS styling compatible with modern WordPress themes. Supports dark mode.

### Plugin Hooks
🪝 Extensive action and filter hooks for developers to extend functionality without code modification.

### Shortcode Customization
⚙️ Flexible shortcode attributes for customizing display: [tracker_list count="20" orderby="seeders" search="1"]

### WP-CLI Support
💻 Optional WP-CLI commands for managing torrents, users, and settings from command line.

### Multisite Support
🌐 Compatible with WordPress multisite installations with per-site tracker databases.

### Custom Post Type Ready
📝 Architecture supports storing torrents as CPT for deeper WordPress integration if desired.

### REST API Ready
📡 Extensible architecture supports REST API endpoints for headless CMS implementations.

### Translation Ready
🌍 Full i18n support with wp-torrent-tracker text domain for community translations.

### Polylang Compatible
🌐 Works with Polylang multilingual plugin for international tracker sites.

---

## 📊 Feature Summary

**Total Features: 143**

| Category | Count |
|----------|-------|
| Core Features | 21 |
| Admin Features | 42 |
| User Features | 24 |
| Technical Features | 26 |
| Security Features | 18 |
| Integration & Compatibility | 36 |

---

## 🎯 Key Highlights

✨ **Production-Ready** - Used in high-traffic environments with thousands of concurrent peers  
🔒 **Enterprise Security** - Private tracker mode with passkey authentication and user banning  
⚡ **Performance** - Optimized for speed with caching, compression, and query optimization  
🛠️ **Flexible Deployment** - WordPress rewrite rules OR standalone PHP endpoints  
🎨 **Customizable UI** - Shortcodes, hooks, filters for complete customization  
💬 **Community Integration** - Native BBPress support for forum-based communities  
🌍 **International** - Translation-ready with i18n support  
📱 **Modern Stack** - PHP 8.0+, WordPress 6.0+, responsive design  

---

## 🚀 Perfect For

- BitTorrent community sites
- Open-source software distribution
- Linux distribution mirrors
- Private tracker communities
- Game server distribution networks
- Educational content sharing
- Enterprise file distribution
- Backup and archive distribution

