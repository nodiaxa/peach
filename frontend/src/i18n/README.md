# Peach i18n Phase 1

This implements the foundational internationalization layer for Peach and translates the core setting/configuration pages.

## Translated Scope (Phase 1)
- The main framework for the Settings Page and Configuration tabs.
- Replaced hardcoded Chinese keys with programmatic routing keys (`library`, `appearance`, etc.).
- Basic UI vocabulary for Settings sections, `save`, `cancel`, `loading`, etc.
- The **General Settings** section ("应用与维护") and Startup Settings.
- User-facing language switching logic, storing preference in `localStorage` under `peach.language`.

## Untranslated Scope (Remaining for Phase 2+)
- **Other Settings Tabs**: Download Settings, Media Processing, Source Settings, Advanced UI Settings (Appearance/Playback).
- **Core App UI**: Navigation sidebar, Search, Feed, Detail Pages, Tooltips.
- **Player Interface**: video.js controls, overlay labels.
- **Metadata**: Tags, Studio Names, Actor Names (these come from DB/API and are generally left as-is, but UI surrounding them might need translation).
- **Errors/Notifications**: Various toast messages, backend validation errors.

All untranslated strings automatically fall back to `zh-CN` which maintains the existing legacy behavior.
