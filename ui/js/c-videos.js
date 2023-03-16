/**
 * VIDEO UTILITIES
 * A small library dedicated to video UI and commands
 */
const cVideos = {
    instances: {},
    update: function() {
        document.querySelectorAll('[c-video]').forEach(function(el) {
            const video_id = el.getAttribute('c-video');
            cVideos.instances[video_id] = el;
            const el_cmds = document.querySelectorAll('[data-video-id="'+video_id+'"]');
            el.addEventListener('pause', function(e) {
                cVideos.instances[video_id].controls = false;
                el_cmds.forEach(function(el_cmd) {
                    el_cmd.classList.remove('u-d-none');
                });
            });
            el_cmds.forEach(function(el_cmd) {
                el_cmd.addEventListener('click', function() {
                    cVideos.instances[video_id].play();
                    cVideos.instances[video_id].controls = true;
                    document.querySelectorAll('[data-video-id="'+video_id+'"]').forEach(function(el) {
                        el.classList.add('u-d-none');
                    });
                });
            });
        });
    }
}
cVideos.update();
