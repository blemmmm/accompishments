function booWho(bool) {
  if(typeof bool === "boolean") {
    return true
  }
  return false
}

booWho(1);  //false
