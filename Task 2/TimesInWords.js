function timeInWords(h, m) {
    
    let hour = Number (h);
    let minute = Number (m);
    let outputString = '';
    
    let hourInWords = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    
    let terms = ['', 'one minute', 'two minutes', 'three minutes', 'four minutes', 'five minutes', 'six minutes', 'seven minutes', 'eight minutes', 'nine minutes', 'ten minutes', 'eleven minutes', 'twelve minutes', 'thirteen minutes', 'fourteen minutes', 'quarter', 'sixteen minutes', 'seventeen minutes', 'eighteen minutes', 'nineteen minutes', 'twenty minutes', 'twenty one minutes', 'twenty two minutes', 'twenty three minutes', 'twenty four minutes', 'twenty five minutes', 'twenty six minutes', 'twenty seven minutes', 'twenty eight minutes', 'twenty nine minutes', 'half'];
    
    
    if ( minute === 0 ){
        outputString = hourInWords[hour] + " o' clock";
    }
    else if ( minute === 30 || minute < 30 ){
        outputString = `${terms[ minute ]} past ${hourInWords[hour]}`;
    }
    else{
        outputString = `${ terms[ 60 - minute ] } to ${ hourInWords[ hour + 1 > 12 ? 1 : hour + 1 ]}`;
    }
    
    return outputString;
    
}
    