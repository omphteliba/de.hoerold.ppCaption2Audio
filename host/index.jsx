// Include Adobe's ExtendScript
#target 'AdobePremierePro'

// Function to get all sequences
function getSequencesWithCaptions() {
    var sequences = [];
    var project = app.project;
    
    // iterate over all sequences
    for(var i = 0; i < project.sequences.numSequences; i++) {
        var sequence = project.sequences[i];
        
        // iterate over all tracks in the sequence
        for(var j = 0; j < sequence.videoTracks.numTracks; j++) {
            var track = sequence.videoTracks[j];
            
            // iterate over all clips in the track
            for(var k = 0; k < track.clips.numItems; k++) {
                var clip = track.clips[k];
                
                // check if the clip has captions
                if(clip.hasCaptions) {
                    sequences.push(sequence.name);
                    break;
                }
            }
        }
    }
    
    return sequences;
}
