"use strict";
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["low"] = 0] = "low";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudioLevel = AudioLevel.medium;
    console.log(currentAudioLevel);
    console.log(AudioLevel);
})();
