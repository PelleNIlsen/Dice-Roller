$(document).ready(function() {
    $("#btnRoll").click(function() {
        let total = 0;
        let output = '';
        $("#dice-rolls").html('');
        $("#sum").html('');
        const animationsEnabled = $("#toggleAnimations").prop("checked");

        if (animationsEnabled) {
            let diceIntervals = [];

            for (let i = 0; i < $("#numNum").val(); i++) {
                output = '<div class="col-sm-4 mt-4"><div class="card"><div id="dice-' + i + '" class="card-body text-center">';
                output += 'Roll ' + (i + 1) + ': <b>0</b>';
                output += '</div></div></div>';
                $("#dice-rolls").append(output);

                diceIntervals[i] = setInterval(function() {
                    $("#dice-" + i).html('Roll ' + (i + 1) + ': <b>' + (Math.floor(Math.random() * $("#diceSides").val()) + 1) + '</b>');
                }, 50);
            }

            let sumInterval = setInterval(function() {
                $("#sum").html('Sum: <b>' + (Math.floor(Math.random() * ($("#diceSides").val() * $("#numNum").val())) + 1) + '</b>');
            }, 50);

            setTimeout(function() {
                for (let i = 0; i < $("#numNum").val(); i++) {
                    let randNum = Math.floor(Math.random() * $("#diceSides").val()) + 1;
                    $("#dice-" + i).html('Roll ' + (i + 1) + ': <b>' + randNum + '</b>');
                    clearInterval(diceIntervals[i]);
                    total += randNum;
                }

                $("#sum").html('Sum: <b>' + total + '</b>');
                clearInterval(sumInterval);
            }, 2000);
        } else {
            for (let i = 0; i < $("#numNum").val(); i++) {
                const randNum = Math.floor(Math.random() * $("#diceSides").val()) + 1;
                output = '<div class="col-sm-4 mt-4"><div class="card"><div class="card-body text-center">';
                output += 'Roll ' + (i + 1) + ': <b>' + randNum + '</b>';
                output += '</div></div></div>';
                $("#dice-rolls").append(output);
                total += randNum;
            }

            $("#sum").html('Sum: <b>' + total + '</b>');
        }
        
    });
});