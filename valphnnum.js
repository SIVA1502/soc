//XXXXXXXXXX
function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if((inputtxt.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
}



//XXX.XXX.XXXX
function phonenumber(inputtxt)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if((inputtxt.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
}



//+XX.XXXX.XXXX
function phonenumber(inputtxt)
{
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if((inputtxt.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
}
