# Yet Another Instagram Developer Guide by dani

## Attention! This is still a work in progress

All the following flags to enable could not work in some versions, and some others could make Instagram crash, if last case happens, clean data from de app and restart, the problem is that you will have to do everything again.
As an alternative you can check by @Fix Guide, and maybe find a solution

Join my [@Repo](https://t.me/igdevdani) for any questions, suggestions or if you want to contribute in the project

Credits:

-   [@Panagiotis Beth](https://t.me/panagiotisbeth) who helped in the proyect
-   [@MyInsta | InstaDM - Guide](https://t.me/instasmashguide)

## How to enable/disable flags

<video height="auto" width="100%" autoplay loop src="https://github.com/daniiii5/assets/blob/main/media/main.mp4" controls title="Title"></video>

<!-- Table of contents --->

# Index

-   [Yet Another Instagram Developer Guide by dani](#yet-another-instagram-developer-guide-by-dani)
    -   [Attention! This is still a work in progress](#attention-this-is-still-a-work-in-progress)
    -   [How to enable/disable flags](#how-to-enabledisable-flags)
-   [Index](#index)
-   [Important](#important)
    -   [Enable all features](#enable-all-features)
    -   [Remove Instagram analytic telemetry](#remove-instagram-analytic-telemetry)
    -   [Remove annoying play store update dialog](#remove-annoying-play-store-update-dialog)
-   [Quality](#quality)
    -   [Upload photos up to 1440p resolution in stories](#upload-photos-up-to-1440p-resolution-in-stories)
    -   [Reduce compression of photo uploads in the feed](#reduce-compression-of-photo-uploads-in-the-feed)
    -   [High quality video uploads on stories and reels](#high-quality-video-uploads-on-stories-and-reels)
-   [Audio](#audio)
    -   [Enable 48khz sample rate](#enable-48khz-sample-rate)
    -   [Enable stereo](#enable-stereo)
-   [UI](#ui)
    -   [Customize buttons layout](#customize-buttons-layout)
    -   [Change activity icon to bell icon](#change-activity-icon-to-bell-icon)
    -   [Filled bottom row buttons](#filled-bottom-row-buttons)
    -   [New dark mode](#new-dark-mode)
    -   [Fix empty space below bottom navigation bar](#fix-empty-space-below-bottom-navigation-bar)
    -   [Enable sheet multi tab](#enable-sheet-multi-tab)
    -   [Open links in external browser](#open-links-in-external-browser)
    -   [New stories stickers menu design](#new-stories-stickers-menu-design)
    -   [Convos reshare](#convos-reshare)
    -   [User avatar size in stories tray](#user-avatar-size-in-stories-tray)
    -   [Media previews in stories](#media-previews-in-stories)
    -   [New heart like animation](#new-heart-like-animation)
    -   [Old settings UI](#old-settings-ui)
    -   [Direct new icon](#direct-new-icon)
    -   [New login UI](#new-login-ui)
    -   [Channels tab](#channels-tab)
    -   [Plus button in stories tray](#plus-button-in-stories-tray)
    -   [Show save animation](#show-save-animation)
    -   [Fundraiser redesign](#fundraiser-redesign)
    -   [New swipe to camera animation](#new-swipe-to-camera-animation)
-   [Feed](#feed)
    -   [Feed add yours](#feed-add-yours)
    -   [Feed video scrubber](#feed-video-scrubber)
    -   [New sharing shortcut](#new-sharing-shortcut)
    -   [Reminder post](#reminder-post)
    -   [Comments translations](#comments-translations)
    -   [Super share v3](#super-share-v3)
    -   [Add notes to posts/reels](#add-notes-to-postsreels)
    -   [Audience controls](#audience-controls)
    -   [Feed emphasized](#feed-emphasized)
        -   [New versions](#new-versions)
        -   [Old versions](#old-versions)
    -   [Enable For You Tab](#enable-for-you-tab)
-   [Reels and Reels tab](#reels-and-reels-tab)
    -   [Watch reels with friends](#watch-reels-with-friends)
    -   [Hide Follow button](#hide-follow-button)
    -   [Reels seekbar](#reels-seekbar)
    -   [Timestamp](#timestamp)
    -   [Show the number of views on your own reels](#show-the-number-of-views-on-your-own-reels)
    -   [Caption translations](#caption-translations)
    -   [Swipe left to view profile](#swipe-left-to-view-profile)
    -   [Hide suggested posts with certain words](#hide-suggested-posts-with-certain-words)
    -   [Text to speech](#text-to-speech)
    -   [Floating friend’s likes](#floating-friends-likes)
    -   [Short comment hint text](#short-comment-hint-text)
    -   [Enable listen in spotify, or add to spotify playlist](#enable-listen-in-spotify-or-add-to-spotify-playlist)
    -   [Tap to pause](#tap-to-pause)
    -   [Enable longer reels](#enable-longer-reels)
    -   [Download reels](#download-reels)
    -   [Share comments](#share-comments)
    -   [Avatar comments](#avatar-comments)
    -   [Carousel post mention](#carousel-post-mention)
        -   [Old versions](#old-versions-1)
        -   [New versions](#new-versions-1)
    -   [New comments menu](#new-comments-menu)
    -   [Replies to replies](#replies-to-replies)
    -   [Comments for you](#comments-for-you)
-   [Explore](#explore)
    -   [Reduce and hide sensitive content](#reduce-and-hide-sensitive-content)
    -   [Audio preview](#audio-preview)
    -   [Increase audio preview duration](#increase-audio-preview-duration)
    -   [Mutual filters](#mutual-filters)
    -   [New search tab design](#new-search-tab-design)
-   [Stories](#stories)
    -   [Rounded edges on the mentioned story](#rounded-edges-on-the-mentioned-story)
    -   [Sound button](#sound-button)
    -   [Move the progress bar to the bottom](#move-the-progress-bar-to-the-bottom)
    -   [Custom replies](#custom-replies)
    -   [Story user search](#story-user-search)
    -   [Messenger and Reply icons in viewer list](#messenger-and-reply-icons-in-viewer-list)
    -   [Custom color stickers](#custom-color-stickers)
    -   [Music sticker with avatar stickers](#music-sticker-with-avatar-stickers)
    -   [Music sticker with animated avatar stickers](#music-sticker-with-animated-avatar-stickers)
    -   [Option to cancel all ongoing uploads](#option-to-cancel-all-ongoing-uploads)
    -   [Add comments to stories](#add-comments-to-stories)
    -   [Request Mention](#request-mention)
    -   [Archive posted stories](#archive-posted-stories)
    -   [Multiple close friends lists](#multiple-close-friends-lists)
    -   [Enable story snapshot](#enable-story-snapshot)
    -   [Disable cubic animation](#disable-cubic-animation)
    -   [Add yours sticker button in the camera section](#add-yours-sticker-button-in-the-camera-section)
    -   [Upload collaborative stories](#upload-collaborative-stories)
    -   [60 second stories](#60-second-stories)
    -   [Share profile to stories](#share-profile-to-stories)
    -   [Post directly to highlights](#post-directly-to-highlights)
-   [Camera](#camera)
    -   [Change filters new icon](#change-filters-new-icon)
    -   [New fonts](#new-fonts)
-   [Direct](#direct)
    -   [Notes](#notes)
        -   [Enable normal notes](#enable-normal-notes)
        -   [Music in notes](#music-in-notes)
        -   [Location notes](#location-notes)
        -   [Videos in notes](#videos-in-notes)
        -   [Questions \& Answers](#questions--answers)
        -   [Enable lives in notes](#enable-lives-in-notes)
        -   [Enable voice recordings in notes](#enable-voice-recordings-in-notes)
        -   [Enable audio and media replies](#enable-audio-and-media-replies)
        -   [Enable sticker replies](#enable-sticker-replies)
        -   [Happy new year confetti animation](#happy-new-year-confetti-animation)
        -   [Translate notes](#translate-notes)
        -   [Post note for followers, following or close friends](#post-note-for-followers-following-or-close-friends)
        -   [Open profile when pressing it](#open-profile-when-pressing-it)
        -   [Send notes as ampersand](#send-notes-as-ampersand)
        -   [Show notes in profile](#show-notes-in-profile)
        -   [Enable tap profile to open user story](#enable-tap-profile-to-open-user-story)
        -   [Set audience notes](#set-audience-notes)
        -   [React to notes](#react-to-notes)
        -   [**Must not**](#must-not)
    -   [Vanish mode](#vanish-mode)
    -   [Quiet mode](#quiet-mode)
    -   [Chat translations](#chat-translations)
    -   [Resize preview of shared reels](#resize-preview-of-shared-reels)
    -   [Autoplay preview of shared reels](#autoplay-preview-of-shared-reels)
    -   [Forward button](#forward-button)
        -   [Messages forwarding](#messages-forwarding)
        -   [Reels forward button](#reels-forward-button)
    -   [New layout of chat details](#new-layout-of-chat-details)
    -   [Mute chat within XX hours](#mute-chat-within-xx-hours)
    -   [Remove calls tab \& camera button](#remove-calls-tab--camera-button)
    -   [Long press to change chat theme](#long-press-to-change-chat-theme)
    -   [Enable gyroscopic themes](#enable-gyroscopic-themes)
    -   [Swipe to open chat details](#swipe-to-open-chat-details)
    -   [Animated avatar stickers](#animated-avatar-stickers)
    -   [New layout of long press menu](#new-layout-of-long-press-menu)
    -   [Create Images with AI](#create-images-with-ai)
    -   [Enable dropdown menu](#enable-dropdown-menu)
    -   [Location Sharing](#location-sharing)
    -   [Avatar powerups](#avatar-powerups)
    -   [Pin chats](#pin-chats)
        -   [New versions](#new-versions-2)
        -   [Maybe old versions?](#maybe-old-versions)
    -   [Edit messages](#edit-messages)
    -   [Disable read receipts](#disable-read-receipts)
    -   [New modern design of the "send" button in a chat.](#new-modern-design-of-the-send-button-in-a-chat)
    -   [Group invites](#group-invites)
    -   [Voice messages](#voice-messages)
        -   [10m voice messages](#10m-voice-messages)
        -   [Playing out of chat](#playing-out-of-chat)
        -   [Playback speed](#playback-speed)
        -   [Timer](#timer)
        -   [Scrubber](#scrubber)
        -   [Listened state](#listened-state)
    -   [In chat search](#in-chat-search)
    -   [Threshold for displaying the number of unread messages](#threshold-for-displaying-the-number-of-unread-messages)
    -   [Chat with IA](#chat-with-ia)
    -   [Disable swipe to direct](#disable-swipe-to-direct)
    -   [Media stacks enabled](#media-stacks-enabled)
    -   [Media previews before sending](#media-previews-before-sending)
    -   [Avatar Animation](#avatar-animation)
    -   [Non text replies](#non-text-replies)
    -   [Reply to links](#reply-to-links)
    -   [Show avatars in star tab](#show-avatars-in-star-tab)
    -   [Set star tab to avatars](#set-star-tab-to-avatars)
    -   [Seen states](#seen-states)
    -   [IA Message replies](#ia-message-replies)
    -   [Avatar reactions](#avatar-reactions)
    -   [Delete messages for you](#delete-messages-for-you)
-   [Profile](#profile)
    -   [Highlights design](#highlights-design)
    -   [My week](#my-week)
    -   [Highlights tray as cards](#highlights-tray-as-cards)
        -   [Older versions:](#older-versions)
        -   [New versions:](#new-versions-3)
    -   [Highlights grid](#highlights-grid)
    -   [Highlights scrollable media preview](#highlights-scrollable-media-preview)
    -   [Schedule posts](#schedule-posts)
    -   [Reels pinning](#reels-pinning)
    -   [Show your other account in your username](#show-your-other-account-in-your-username)
    -   [Remove suggested accounts](#remove-suggested-accounts)
    -   [New "Create" icon](#new-create-icon)
    -   [Show IGTV section](#show-igtv-section)
    -   [Just seen](#just-seen)
    -   [Profile Interests](#profile-interests)
    -   [Saved subtab in Profile](#saved-subtab-in-profile)
    -   [New header design](#new-header-design)
    -   ["Threads" button added to profile header tab](#threads-button-added-to-profile-header-tab)
    -   [Avatar as profile picture](#avatar-as-profile-picture)
    -   [Wall notes](#wall-notes)
    -   [Remove highlights in profile](#remove-highlights-in-profile)

<br />
<br />
<br />

# Important

## Enable all features

```md
igd xac unbundle
```

Enables all settings for you even if your account is not eligible for these

## Remove Instagram analytic telemetry

```md
analytics2 consolidation max batch lock attempts
```

When this option is set to 0, the application prevents the creation of files in the "app_analytics" folder, which allows you to keep a correct size of the application.
<video height="auto" width="100%" autoplay loop src="https://github.com/daniiii5/assets/blob/main/media/634a233671cf3deded0c5.mp4" controls title="Title"></video>

## Remove annoying play store update dialog

```md
google play update api
```

<br />
<br />
<br />

# Quality

## Upload photos up to 1440p resolution in stories

```md
ensure 1440p photo upload
```

By default the photos you upload to stories are 1080, enabling this setting will increase the resolution up to 1440.
![Alt text](https://github.com/daniiii5/assets/blob/main/media/fc84589ad9d03c89b41a4.png)

## Reduce compression of photo uploads in the feed

```md
photo creation
```

70 = 30% compression
100 = 0% compression (without compression)
![Alt text](https://github.com/daniiii5/assets/blob/main/media/035e2b53ab91ab9b577b3.png)

## High quality video uploads on stories and reels

```md
high quality upload setting
```

Enter the name and enable the toggle and put the bitrate mbps to 20 (recommended).

You can change it to 20 if you use video with 1080p or 1440p resolution (for slightly better compression). And the maximum bitrate you can use is 30 (suitable for 4k video) but there is a possibility that the video will fail to upload if you use bitrate above 25Mbps so be careful.
![Alt text](https://github.com/daniiii5/assets/blob/main/media/5ffafb8221b9b6a6a0df9.png)

After enabling the setting restart the app, and then go to the Instagram settings > Account or Preferences > Cellular data use > and turn on the "Upload at highest quality" option.
![Alt text](https://github.com/daniiii5/assets/blob/main/media/582dc729c6949ae11ead4.png)
<br />
<br />
<br />

# Audio

## Enable 48khz sample rate

```md
cameracore fbaudio ig use 48khz sample rate
```

## Enable stereo

```md
cameracore fbaudio ig use stereo
```

<br />
<br />
<br />

# UI

## Customize buttons layout

```md
panavision nav3
```

Words You Can Use in Changeable Settings (between tab 0-4 and top bar 0-2); (When typing, you should write them all in lowercase.)

-   home
-   explore
-   clips
-   shopping
-   profile
-   direct
-   share
-   news
-   menu
-   friend_map
-   groups

## Change activity icon to bell icon

```md
bell icon
```

Photo preview pending

## Filled bottom row buttons

```md
filled tab icons
```

Only works for the buttons on the bottom row.
![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)

## New dark mode

```md
igds prism launcher config android
```

Enable the new dark mode in instagram, from being an amoled black to a more pleasant dark blue
![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/prism-launcher/mymind-XUlsF9LYeVk-unsplash.png)

## Fix empty space below bottom navigation bar

```md
is mw bottom padding enabled
```

## Enable sheet multi tab

```md
comment sheet multi tabs
```

The is share tab enabled option inside this flag can cause in some version a crash when trying to open a post in feed comments through the See all comments, instead press the comments action to open comments
![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)

## Open links in external browser

```md
should override to external browser
```

## New stories stickers menu design

```md
stories sticker tray redesign
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/sticker-tray-redesign/right.png)

## Convos reshare

```md
convos reshare hub
```

New media button in dm, with some cools features

## User avatar size in stories tray

```md
avatar in standard tray
```

![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)

## Media previews in stories

```md
media previews in stories tray
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/media-preview-in-stories-tray/mymind-XUlsF9LYeVk-unsplash.png)

## New heart like animation

```md
new double tap to like animation
```

or (depends on version)

```md
new double tap heart animation
```

## Old settings UI

```md
fx centralized settings show entrypoint
```

```md
project elevation enabled
```

Disable both, Show the old UI of instagram setting menu instead of the new one.
![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/oldsettings/mymind-XUlsF9LYeVk-unsplash.png)

## Direct new icon

```md
direct interop rebrand
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/interop-rebrand/interop-rebrand.png)

## New login UI

```md
bypass triage oe
```

```md
should see xav switcher
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/login/mymind-XUlsF9LYeVk-unsplash.png)

## Channels tab

```md
channels inbox discovery
```

Enable everything except:

-   disable channels tab badging
-   disable mesages tab badging
-   fetch channels on startup (this makes unloadable direct list)
-   decline invitations from inbox enabled
    ![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/channels-tab/mymind-XUlsF9LYeVk-unsplash.png)

## Plus button in stories tray

```md
icon over ring enabled
```

![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)

## Show save animation

```md
should show save flow on tap
```

## Fundraiser redesign

```md
fundraiser donation sheet redesign
```

## New swipe to camera animation

```md
camera android nav3 bottom creation animation
```

<br />
<br />
<br />

# Feed

## Feed add yours

```md

```

## Feed video scrubber

```md
scrubber in expanded video
```

Attention!!! Only works for reels videos in the main feed. This doesn't work for igtv, regular video, and carousel videos in the following & favorites tabs, explore tab, and profile tab.
![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/scrubber/mymind-XUlsF9LYeVk-unsplash.png)

## New sharing shortcut

```md
super share
```

Attention!!! Not recommended to activate the 3rd option because the "add X to your story" button doesn't appear on igtv posts and regular video posts in the profile tab & explore tab.
![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)

## Reminder post

```md
upcoming events creation
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/reminder/mymind-XUlsF9LYeVk-unsplash.png)

## Comments translations

```md
comments translations
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/translation/mymind-XUlsF9LYeVk-unsplash.png)

## Super share v3

```md
super share v3
```

Enable everything, and modify add top story hscroll to 0 if you want the add to story button, or set it to 1 to remove it
![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/super-share-v3/mymind-XUlsF9LYeVk-unsplash.png)

## Add notes to posts/reels

```md
content notes
```

No preview until it works again

## Audience controls

```md
audience controls
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/audience-controls/mymind-XUlsF9LYeVk-unsplash.png)

## Feed emphasized

### New versions

```md
feed emphasized social ufi flat linear layout enabled
```

```md
feed emphasized social ufi is reshare count enabled in ufi
```

```md
feed emphasized social ufi left aligned enabled
```

```md
feed emphasized social ufi view all comments enabled
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/emhasized/mymind-XUlsF9LYeVk-unsplash.png)

### Old versions

```md
simplified post layout
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/emhasized/2mymind-XUlsF9LYeVk-unsplash.png)

## Enable For You Tab

```md
feed dsa header nav enable for you title switch
```

```md
feed dsa header nav enable for you title switch with delay
```

<br />
<br />
<br />

# Reels and Reels tab

## Watch reels with friends

```md
reels together
```

allows you to watch reels with people in your chats or with people you follow and follow back.
Attention!!! only works on other people who also have this setting enabled.
Not working in newer versions
![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)

## Hide Follow button

```md
android viewer disable follow button
```

Removes the follow button while watching reels.
![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)

## Reels seekbar

```md
clips viewer scrubber improvements
```

![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)
Set android attachment scrubber duration to 1 to have the scrubber in all reels including short ones

```md
preview thumbnails are enabled
```

![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)

## Timestamp

```md
clips relative timestamp
```

Enter the name and enable all the toggles.

Removed in newer versions

## Show the number of views on your own reels

```md
reels played by
```

Show the ammount of users that have seen your reel

No idea why it does not work

## Caption translations

```md
clips viewer caption see translation
```

Only activate the 1st option.
![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/translation/translation.png)

## Swipe left to view profile

```md
swipe to profile
```

Only works on reels tab.

## Hide suggested posts with certain words

```md
hide unconnected posts with words
```

With this option you can hide or get rid of suggested posts that have certain words and emojis in the captions of the video, after adding the word you want to hide then all suggested posts that have that word in their captions 'will not' appear in your feed and reels tab as suggested posts.
![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/remove/mymind-XUlsF9LYeVk-unsplash.png)

## Text to speech

```md
reels text to speech
```

This feature is only available for reels and not for stories.
![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)

## Floating friend’s likes

```md
clips friendly viewer
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/floating/mymind-XUlsF9LYeVk-unsplash.png)

## Short comment hint text

```md
should shorten comment hint text
```

## Enable listen in spotify, or add to spotify playlist

```md
spotify partnership
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/spotify/mymind-XUlsF9LYeVk-unsplash.png)

## Tap to pause

```md
reels tap to pause
```

## Enable longer reels

```md
reels duration
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/DURATION/mymind-XUlsF9LYeVk-unsplash.png)

## Download reels

```md
reels third party downloads
```

## Share comments

```md
conversations comment reshares
```

Pending serverside release on my account

## Avatar comments

```md
avatars in comments
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/avatarincmd/mymind-XUlsF9LYeVk-unsplash.png)

## Carousel post mention

### Old versions

```md
carousel slide comments
```

### New versions

```md
carousel comments with combo button
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/mention-post/mymind-XUlsF9LYeVk-unsplash.png)

## New comments menu

```md
comment actions menu
```

![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)

## Replies to replies

```md
comments replies to replies
```

![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)

## Comments for you

```md
android comments for you
```

![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)
<br />
<br />
<br />

# Explore

## Reduce and hide sensitive content

```md
igmwb explore controls
```

![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)
![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)

## Audio preview

```md
clips global audio search
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/music-search/mymind-XUlsF9LYeVk-unsplash.png)

## Increase audio preview duration

```md
audio page music preview duration
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/long-music-preview/mymind-XUlsF9LYeVk-unsplash.png)

## Mutual filters

```md
stories mutuals filter
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/mutuals/mymind-XUlsF9LYeVk-unsplash.png)

## New search tab design

```md
reels subtab
```

Long press search icon to search
<br />
<br />
<br />

# Stories

## Rounded edges on the mentioned story

```md
stories mention reshare video sticker
```

When resharing a story where you have been mentioned, no sound will be audible

## Sound button

```md
stories sound indicator
```

Can be enabled, but wont work in newer versions

## Move the progress bar to the bottom

```md
stories bottom progress bar
```

Removed in newer versions

## Custom replies

```md
reply types
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/reply-types/reply.png)
Reply to stories with media, camera, stickersm emojis, gifs or reacts

## Story user search

```md
story dashboard search
```

Removed in newer versions

## Messenger and Reply icons in viewer list

```md
ios spark viewer list message icon
```

Only 1

Pending animation preview

## Custom color stickers

```md
stories custom color gradient stickers
```

Working for location, mention, link, and hashtag stickers.

## Music sticker with avatar stickers

```md
avatars avatar with music sticker
```

## Music sticker with animated avatar stickers

```md
avatars avatar with music sticker is animated stickers enabled
```

![Alt text](YAIDG/avatar-in-song-pill/mymind-XUlsF9LYeVk-unsplash.png)

## Option to cancel all ongoing uploads

```md
stop all uploads
```

![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)

## Add comments to stories

```md
story interactions hype
```

Pending launch

## Request Mention

```md
stories request mention
```

Removed in newer versions

## Archive posted stories

```md
stories archive refactor
```

Removed in newer versions

## Multiple close friends lists

```md
private lists
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/private-lists/mymind-XUlsF9LYeVk-unsplash.png)

## Enable story snapshot

```md
story snapshot
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/snapshot/mymind-XUlsF9LYeVk-unsplash.png)

## Disable cubic animation

```md
stories viewer preq cube
```

## Add yours sticker button in the camera section

```md
add yours browser
```

## Upload collaborative stories

```md
stories collab stories
```

Not working for now, if you try this feature you will end with a story error, a video that you will not be able to delete
![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/stories-colab-stories/mymind-XUlsF9LYeVk-unsplash.png)

## 60 second stories

```md
stories video trimmer
```

```md
stories originality reel reshares
```

## Share profile to stories

```md
share profile to stories
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/share-profile-to-stories/mymind-XUlsF9LYeVk-unsplash.png)

## Post directly to highlights

```md
profile post story directly to highlights
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/profile-post-story-directly-to-highlights/mymind-XUlsF9LYeVk-unsplash.png)

<br />
<br />
<br />

# Camera

## Change filters new icon

```md
ar effects icon change
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/effects-af/b10ee6107e47a27b55a70.png)

## New fonts

```md
camera android reels text expansion
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/fonts/mymind-XUlsF9LYeVk-unsplash.png)

<br />
<br />
<br />

# Direct

## Notes

### Enable normal notes

```md
cf hub
```

-   Set `hub layout type` to `ONE_ROW_POGS_2`

### Music in notes

```md
music notes
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/notes/music.png)

### Location notes

```md
location notes
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/notes/location.png)

-   Keep disabled `is text required for sharing`

### Videos in notes

```md
notes profile video
```

### Questions & Answers

```md
notes prompts
```

### Enable lives in notes

```md
live notes
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/notes/live.png)

### Enable voice recordings in notes

```md
audio notes config
```

-   Keep disabled `internal only`
    ![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/notes/audios.png)

### Enable audio and media replies

```md
notes replies
```

-   Keep disabled `hide audio reply for audio notes`
    Optional enabling `should expose on inbox open`

### Enable sticker replies

```md
notes sticker replies
```

### Happy new year confetti animation

```md
notes visual effects
```

### Translate notes

```md
see translation notes
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/notes/translation.png)

### Post note for followers, following or close friends

```md
notes audience expansion
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/notes/audience.png)

### Open profile when pressing it

```md
notes profile pic tap reply sheet
```

### Send notes as ampersand

```md
group notes
```

### Show notes in profile

```md
notes on profile
```

### Enable tap profile to open user story

```md
stories in notes
```

### Set audience notes

```md
notes audience expansion
```

### React to notes

```md
content notes
```

-   Keep disabled `content notes is direct likes enabled`
-   Keep disabled `content notes is lightweight feedback enabled`
-   Keep disabled `content notes is phase 1 enabled`
-   Keep disabled `content notes is phase I notes likes enabled`

```md
notes lightweight feedback
```

-   Keep disabled `notes lightweight feedback likes only enabled`

### **Must not**

Don't enable this, otherwise you wont be able to reply to notes

```md
send share manager v2 enable notes reply
```

## Vanish mode

```md
direct vanish mode
```

```md
direct vanish mode intro qp
```

```md
direct vanish mode message replay
```

Send messages as "ephemeral" or "one time view"

## Quiet mode

```md
quiet mode
```

Just like the 'pause all' notifications option in Instagram settings, the quiet mode will disable all types of notifications at a certain time and you can set when it will turn on and off automatically.

```md
quiet mode x plat
```

Improve the "Quiet mode" feature by adding the ability to choose which days to activate this mode
![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/quiet-mode/mymind-XUlsF9LYeVk-unsplash.png)

## Chat translations

```md
igd android thread translation is enabled
```

Attention!!! not working in all chats, i don't know how instagram chose it but if you see a banner in a chat to translate this chat it means you can activate this feature in this chat from the chat details, if not then you cannot activate it in any other way.

## Resize preview of shared reels

```md
clips direct reshare size
```

-   Default: `164`
-   Max: `300`

## Autoplay preview of shared reels

```md
full autoplay enabled
```

## Forward button

### Messages forwarding

```md
direct forwarding
```

### Reels forward button

```md
reels direct message forwarding
```

## New layout of chat details

```md
direct thread details redesign
```

-   Keep disabled show privacy buttons on main page
-   Keep disabled use alternate privacy icon
    ![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/direct-thread-details-redesign/mymind-XUlsF9LYeVk-unsplash.png)

## Mute chat within XX hours

```md
thread time muting
```

-   Keep disabled `has debug time option`
    ![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/thread-time-muting/mymind-XUlsF9LYeVk-unsplash.png)

## Remove calls tab & camera button

```md
remove calls tab entrypoint
```

```md
remove inbox camera entrypoint
```

## Long press to change chat theme

```md
long press to theme picker
```

![Alt text](https://github.com/daniiii5/assets/blob/main/media/.png)

## Enable gyroscopic themes

```md
igd android gyroscopic themes
```

## Swipe to open chat details

```md
swipe to thread details
```

## Animated avatar stickers

```md
igd animated avatar stickers
```

## New layout of long press menu

```md
igd long press message action
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/igd-long-press-message-action/mymind-XUlsF9LYeVk-unsplash.png)

## Create Images with AI

```md
imagine create
```

```md
direct ai agents eligibility = 3
```

## Enable dropdown menu

```md
direct composer overflow is composer
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/direct-composer-overflow-is-composer/mymind-XUlsF9LYeVk-unsplash.png)

## Location Sharing

```md
location share xma
```

```md
location sharing
```

## Avatar powerups

```md
avatar powerups
```

## Pin chats

### New versions

```md
igd android pin threads
```

### Maybe old versions?

```md
thread pinning
```

## Edit messages

```md
igd android edit message
```

## Disable read receipts

```md
igd read receipt control is enabled for open
```

Enabled an option inside each user direct details panel to disable seen states
![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/igd-read-receipt-control-is-enabled-for-open/mymind-XUlsF9LYeVk-unsplash.png"¡)

## New modern design of the "send" button in a chat.

```md
smashable send
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/smashable-send/mymind-XUlsF9LYeVk-unsplash.png)

## Group invites

```md
igd android groups invites
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/igd-android-groups-invites/mymind-XUlsF9LYeVk-unsplash.png)

## Voice messages

### 10m voice messages

```md
voice msg improvements length increase 10 min
```

### Playing out of chat

```md
igd voice msg out of chat playback
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/igd-voice-msg-out-of-chat-playback/mymind-XUlsF9LYeVk-unsplash.png)

### Playback speed

```md
voice msg improvements playback speed enabled
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/voice-msg/playback.png)

### Timer

```md
add audio message timer
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/voice-msg/timer.png)

### Scrubber

```md
voice msg improvements scrubbing handle enabled
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/voice-msg/scrubber.png)

### Listened state

```md
voice msg improvements listened statestyling enabled
```

## In chat search

```md
in thread content search
```

Removed in newer versions

## Threshold for displaying the number of unread messages

```md
snapshot messages per thread count
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/snapshot-messages-per-thread-count/mymind-XUlsF9LYeVk-unsplash.png)

## Chat with IA

```md
direct ai agents
```

```md
direct ai agents eligibility = 1, 2 or 3
```

Not released in Europe (Pending launch)

## Disable swipe to direct

```md
should disable swipe to direct
```

## Media stacks enabled

```md
direct media stacks enabled
```

![Alt text](https://github.com/daniiii5/assets/blob/main/YAIDG/direct-media-stacks-enabled/mymind-XUlsF9LYeVk-unsplash.png)

## Media previews before sending

```md
igd android media preview
```

Lets you to preview a line of selected photos, and if you do not have any selected and press one, you will be able to edit the photo

## Avatar Animation

```md
avatar reactions
```

Avatar Animation while reacting to a message

## Non text replies

Enable replies with photos, videos, audios, etc

```md
igd non text replies
```

## Reply to links

```md
direct link replies
```

## Show avatars in star tab

```md
igd avatar growth
```

## Set star tab to avatars

```md
android avatars quick reactions direct receive
```

## Seen states

```md
direct seen states in inbox
```

Show how long the user has read your message instead of "Seen" only

## IA Message replies

```md
creator agents suggested replies
```

## Avatar reactions

```md
ig4a avatar reactions
```

Adds an avatar to the red heart like animation

## Delete messages for you

```md
igd delete messages
```

<br />
<br />
<br />

# Profile

## Highlights design

```md
japan labs my week is edit header enable
```

Enable a new edit button over your profile highlights, you can enable some settings

-   [My week](#my-week)
-   [Highlights tray as cards](#highlights-tray-as-cards) (new versions)

## My week

```md
japan labs my week is enabled
```

```md
japan labs my week is settings action sheet entry point enabled
```

```md
japan labs my week is share enabled
```

Enabled a my week highlight to post stories about hows going your week

## Highlights tray as cards

### Older versions:

```md
highlight tray as cards
```

### New versions:

```md
japan labs my week is cards layout enabled
```

Be sure to have Highlights design enabled

## Highlights grid

```md
profile highlights click into grid
```

## Highlights scrollable media preview

```md
expression highlights improvements highlights
```

## Schedule posts

```md
content scheduling
```

This feature is only available for professional accounts

## Reels pinning

```md
clips reels pinning
```

## Show your other account in your username

```md
mimicry
```

## Remove suggested accounts

```md
self profile chaining enabled
```

## New "Create" icon

```md
is profile creation button icon swap
```

## Show IGTV section

```md
consumption merge profile video tabs
```

This option should be enabled in your account, it combines the igtv section to the reels section into one section on the profile tab, disable it if you want to get that igtv section back.

## Just seen

```md
profile just watched
```

Enables a message when entering the profile of a post from the feed

## Profile Interests

```md
bio interests
```

Animation preview pending

## Saved subtab in Profile

```md
saved subtab on profile is enabled
```

This tab wont load if you have public collections enabled

## New header design

```md
profile header daisy
```

Removed in newer versions

## "Threads" button added to profile header tab

```md
is ig to p92 app switcher enabled android
```

## Avatar as profile picture

```md
is coin flip ssr enabled
```

## Wall notes

```md
profile wall notes
```

Your followers can add Notes to your profile
It stays on your profile for up to 3 days
You can choose to remove any notes added by your followers

## Remove highlights in profile

```md
stories archive negative holdout
```
