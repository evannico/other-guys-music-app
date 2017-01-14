angular.module("app.services").service("mixService",["$rootScope","$location","$q","GENERAL_CONFIG","MixCollection","TrackCollection",function(r,e,t,i,n,s){var a={Mixes:n,CurrentMixID:null,Tracks:s,PlayingMixID:null,PlayingTrackID:null,PlayingTrack:null,wl:new WhiteLabel(i.WHITE_LABEL_CLIENT_ID)};return a.SelectMix=function(r){var e=this;return this.GetMix(r).then(function(r){return e.CurrentMix=r,e.CurrentMixID=r.id,e.GetMixTracks(r)})},a.GetMix=function(r){var e=t.defer(),i=this.Mixes.GetPlaylistNumber(r);return i&&e.resolve(i),!r&&this.Mixes.array.length>0&&e.resolve(this.Mixes.array[0]),e.promise},a.GetPlayingMix=function(){return this.Mixes.get(this.PlayingMixID)},a.GetMixTracks=function(r){var e=t.defer(),i=this,r=this.Mixes.get(r.id);if(r.Tracks)e.resolve(r);else{var n=r.slug;this.wl.getMixtapeTracks(n,{results:!0}).then(function(t){i.Mixes.AddTracks(r.id,t),e.resolve(i.Mixes.get(r.id))})}return e.promise},a.getTrackFromSlug=function(r){var e=this.CurrentMix.Tracks.array.filter(function(e){return e.slug===r});return 0===e.length?null:e[0]},a.GetFirstTrack=function(){return track=this.CurrentMix.Tracks.at(0),r.currentTrack=track,a.PlayingTrackID=track.id,r.play(),track},a.MoveUpDownTrack=function(r,e){var i=t.defer(),n=this,s=this.GetPlayingMix().Tracks.MoveUpDownSong(r,e);if(s)i.resolve(s);else{var a;a=this.Shuffle?this.Mixes.GetRandomMix():this.Mixes.MoveUpDownMix(this.CurrentMix,e),n.GetMixTracks(a).then(function(r){n.CurrentMix=r,n.CurrentMixID=r.id,i.resolve(r.Tracks.at(0))})}return i.promise},a.GetNextTrack=function(r){return this.MoveUpDownTrack(r,1)},a.GetPreviousTrack=function(r){return this.MoveUpDownTrack(r,-1)},a.SetPlaying=function(e,t){r.currentTrack=t,a.PlayingTrackID=t.id,a.PlayingMixID=e},a.GetAllPlaylists=function(e){e=e||i.DEFAULT_COLLECTION;var t=this;return a.CurrentCollection=e,this.wl.getCollectionMixtapes(e,{all:!0,results:!0}).then(function(e){return t.Mixes.addAll(e),r.$apply(),e})},a.GetTrackURL=function(r,e,t){r||(r=this.CurrentCollection),e||(e=this.CurrentMix.slug);var n=location.href.split("/"),s=n[0],a=n[2],l=s+"//"+a+"/";return i.HTML_5_MODE||(l+="#/"),l+r+"/"+e+"/"+t},a}]);