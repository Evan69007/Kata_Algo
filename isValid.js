

function isValid(str)
{
	const char_open = [] 
//char_open stocke l'historique des parenthèses ouvertes pas encore fermées
//  pour vérifier que la parenthèse fermée est le bon type de parenthèse
	for (let i = 0; i < str.length; i++)
	{
		if (str.charAt(i) == "(" || str.charAt(i) == "{" || str.charAt(i) == "[")
		{
			char_open.push(str.charAt(i))
		}
		else
		{
			if (char_open.length == 0)
			{
				return (false) 
//si il n'y a rien dans char_open, alors ancune parenthèse n'a été ouverte donc aucune ne doit être fermée pour que str soit valide
			}
			if (str.charAt(i) == ")" && char_open[char_open.length - 1] == "(")
			{
				char_open.pop()
			}
			else if (str.charAt(i) == ")" && char_open[char_open.length - 1] != "(")
			{
				return (false)
			}
			if (str.charAt(i) == "}" && char_open[char_open.length - 1] == "{")
			{
				char_open.pop()
			}
			else if (str.charAt(i) == "}" && char_open[char_open.length - 1] != "{")
			{
				return (false)
			}
			if (str.charAt(i) == "]" && char_open[char_open.length - 1] == "[")
			{
				char_open.pop()
			}
			else if (str.charAt(i) == "]" && char_open[char_open.length - 1] != "[")
			{
				return (false)
			}
		}
	}
	return (true)
}

const str = "()"
console.log(isValid(str));
// retourne `true`
    
const str2 = "()[]{}"
console.log(isValid(str2));
// retourne `true`
    
const str3 = "(]"
console.log(isValid(str3));
// retourne `false`
    
const str4 = "([])"
console.log(isValid(str4));
// retourne `true`

const str5 = "({)}"
console.log(isValid(str5));
//retourne `false`