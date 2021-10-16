// Returns true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
  const formats = [
    /^\d\d\d-\d\d\d-\d\d\d\d$/, 
    /^\(\d\d\d\)\d\d\d-\d\d\d\d$/,
    /^\(\d\d\d\)\s\d\d\d-\d\d\d\d$/, 
    /^\d\d\d\s\d\d\d\s\d\d\d\d$/,
    /^\d\d\d\d\d\d\d\d\d\d$/, 
    /^\d\d\d\d\d\d\d\d\d\d$/, 
    /^1\s\d\d\d\s\d\d\d\s\d\d\d\d$/,
    /^1\s\d\d\d-\d\d\d-\d\d\d\d$/,		
		/^1\(\d\d\d\)\d\d\d-\d\d\d\d$/,		
		/^1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d$/
  ]

  const result = formats.some((reg) => reg.test(str));
  return result
}

telephoneCheck("555-555-5555"); // true