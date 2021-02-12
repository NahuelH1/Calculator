class KeyCodes
{
    static numbers(keycode)
  {
    if(keycode <= 57 && keycode>= 48 || keycode >= 96 && keycode <= 105)
    {
      return true
    }
    return false
  }
  static operator(keycode)
  {
    if(keycode == 111 || keycode == 106|| keycode == 109 || keycode == 107)
    {
        return true
    }
    return false
  }
  static results(keycode)
  {
    if(keycode == 48 || keycode == 13)
    {
      return true
    }
    return false
  }
  static reset(keycode)
  {
    if(keycode == 27)
    {
      return true
    }
    return false
  }
}
export default KeyCodes 