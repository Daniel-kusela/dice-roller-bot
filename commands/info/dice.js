module.exports = {
    name: "roll",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        var dice="";
        class rtd
        {
            static main(args1)
            {
                var s="";
                s=s+args1[0];
                for(var i=1;i<args1.length;i++)
                {
                    s=s+" "+args1[i];
                }
                try
                {
                    return ""+rtd.RollDice(s);
                }
                catch (Exception)
                {
                    return "problematic result, please try again."
                }
            }
            static RollDice(s)
            {
                var sum = 0;
                var multiplier = 1;
                var s2 = s;
                var temp = s2.split('');
                for (var j=0; j < temp.length; j++)
                {
                    if (temp[j] != ' ' && temp[j] != '+' && temp[j] != '1' && temp[j] != '2' && temp[j] != '3' && temp[j] != '4' && temp[j] != '5' && temp[j] != '6' && temp[j] != '7' && temp[j] != '8' && temp[j] != '9' && temp[j] != '0' && temp[j] != 'd')
                    {
                        throw "Error";
                    }
                }
                if (s2.indexOf(' ') == 0 || s2.indexOf(' ') == s2.length - 1)
                {
                    throw "Error";
                }
                if (s2.indexOf(' ') != -1)
                {
                    var s3 = s2.substring(s2.indexOf(' ') + 1);
                    if (s3.indexOf(' ') != -1)
                    {
                        throw "Error";
                    }
                    s3 = s2.substring(0,s2.indexOf(' '));
                    multiplier = parseInt(s3);
                    if (multiplier < 1)
                    {
                        throw "Error";
                    }
                    s2 = s2.substring(s2.indexOf(' ') + 1);
                }
                if (multiplier > 1)
                {
                    for (var k=0; k < multiplier; k++)
                    {
                        sum = sum + rtd.recursion(s2);
                    }
                }
                else 
                {
                    sum = sum + rtd.recursion(s2);
                }
                return sum;
            }
            static recursion(s)
            {
                if (s.indexOf('+') == 0 || s.indexOf('+') == s.length - 1)
                {
                    throw "Error";
                }
                if (s.indexOf('+') != -1)
                {
                    return rtd.recursion(s.substring(0,s.indexOf('+'))) + rtd.recursion(s.substring(s.indexOf('+') + 1));
                }
                var sum = 0;
                if (s.indexOf('d') == -1)
                {
                    return parseInt(s);
                }
                if (s.indexOf('d') == s.length - 1)
                {
                    throw "Error";
                }
                if (s.indexOf('d') == 0)
                {
                    var temp=Math.floor(Math.random()*(parseInt(s.substring(1),10))) + 1;
                    sum = temp;
                    if(dice=="")
                        dice=dice+temp
                    else
                        dice=dice+" , "+temp;
                    console.log("dice: ["+dice+"]");
                }
                else 
                {
                    var multiplier = parseInt(s.substring(0,s.indexOf('d')));
                    if (multiplier < 1)
                    {
                        throw "Error";
                    }
                    for (var h=0; h < multiplier; h++)
                    {
                        var temp2=Math.floor(Math.random()*(parseInt(s.substring(s.indexOf('d') + 1)))) + 1;
                        sum = sum + temp2;
                        if(dice=="")
                            dice=dice+temp2;
                        else
                            dice=dice+","+temp2;
                        console.log("dice: ["+dice+"]");
                    } 
                }
                return sum;
            }
        }
        try
        {
            const total=rtd.main(args);
            const rolls=dice;
            if(total.length>3986||total.length+dice.length>3969)
                message.reply({ content: `Message length is too long, please try a smaller amount`});
            else
            {
                if(rolls.indexOf(',')==-1)
                    message.reply({ content: `You rolled a ${total}.`});
                else
                    message.reply({ content: `You rolled [${rolls}], for a total of ${total}.`});
            }
        }
        catch (Exception)
        {
            message.reply({contnct: 'something went wrong.'});
        }

    }
}