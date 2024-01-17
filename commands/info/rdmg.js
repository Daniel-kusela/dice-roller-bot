module.exports = {
    name: "droll",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        var crits=0;
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
                s.substring
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
                    if(temp==parseInt(s.substring(1),10))
                    {
                        sum=temp*2;
                        crits=crits+1;
                    }
                    else
                        sum = temp;
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
                        if(temp2==parseInt(s.substring(s.indexOf('d') + 1)))
                        {
                            sum=sum+temp2*2;
                            crits=crits+1;
                        }
                        else
                            sum = sum +temp2;
                    }
                }
                return sum;
            }
        }
        try
        {
            const total=rtd.main(args);
            const temp5=crits;
            if(total.length>3958||total.length+temp5.length>3965)
                message.reply({ content: `Message length is too long, please try a smaller amount`});
            else
            {
                if(temp5==0)
                    message.reply({ content: `You rolled a total of ${total}.`});
                else
                {
                    if(temp5==1)
                        message.reply({ content: `You rolled a total of ${total} with a single crit.`});
                    else
                        message.reply({ content: `You rolled a total of ${total} with ${temp5} crits.`});
                }
            }
        }
        catch (Exception)
        {
            message.reply({contnct: 'something went wrong.'});
        }

    }
}
