        $(function() {
            $("#color-picker").on("change", function() {
                $('#area').text($('#color-picker').val());

                var objTBL = document.getElementById("resultTable");
                　　　　
                var count = objTBL.rows.length;

                // 一番上の行に新しい行を追加
                var row = objTBL.insertRow(1);

                // 列の追加
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);

                var code = $('#color-picker').val();
                var red = parseInt(code.substring(1, 3), 16);
                var green = parseInt(code.substring(3, 5), 16);
                var blue = parseInt(code.substring(5, 7), 16);

                cell1.innerHTML = '<span class="seqno">' + count + '</span>';
                cell2.innerHTML = '<div style="background-color:' + $('#color-picker').val() + '">　</div>';
                cell3.innerHTML = '<span class="seqno">' + $('#color-picker').val() + '</span>';
                cell4.innerHTML = '<span class="seqno">' + red + '</span>';
                cell5.innerHTML = '<span class="seqno">' + green + '</span>';
                cell6.innerHTML = '<span class="seqno">' + blue + '</span>';
            });

        });

        function getColor() {
            document.getElementById("color-picker").click();
        }