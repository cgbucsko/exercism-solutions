export function isPangram(str) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let pangram = false;

    str = str.toLowerCase();
    [...str].forEach(c => {
        let index = alphabet.indexOf(c);
        if (index >= 0) {
            alphabet.splice(index, 1);
            if (alphabet.length === 0) {
                pangram = true;
            }
        }
    });
    return pangram;
}