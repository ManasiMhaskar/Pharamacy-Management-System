function validatename()
{
    var regName = /^[A-Za-z ]+$/;
    var name=document.getElementById('name').value;

      if(name =="")
      {
        document.getElementById('namee').innerHTML="**Please Enter Your Name**";
        return false;
      }
      if(regName.test(name))
      {
        document.getElementById('namee').innerHTML=' ';
      }
      else
      {
        document.getElementById('namee').innerHTML='**Please Enter Character Only**';

      }
      if(name.length<2 || name.length>30)
      {
        document.getElementById('namee').innerHTML="**Name length must be between 2 and 30**";
        return false;
      }
      
 }


 function validatemobile()
 {
  var phoneno = /^[7-9]\d{9}$/;
  var mobileno=document.getElementById('mobile').value;
  if(mobileno == "")
  {
    document.getElementById('mobilee').innerHTML="**Please Enter Your Mobile Number**";
  }
  else if(!mobileno.match(phoneno))
  {
    document.getElementById('mobilee').innerHTML="**Please Enter Valid Mobile Number**";
  }
  else
  {
    document.getElementById('mobilee').innerHTML="  ";
  }
 }

 function validatefoodname()
{
    var regName = /^[A-Za-z ]+$/;
    var foodname=document.getElementById('foodname').value;

      if(foodname =="")
      {
        document.getElementById('foodnamee').innerHTML="**Please Enter Food Name**";
        return false;
      }
      if(regName.test(foodname))
      {
        document.getElementById('foodnamee').innerHTML=' ';
      }
      else
      {
        document.getElementById('foodnamee').innerHTML='**Please Enter Character Only**';
      }
      if(foodname.length<2 || foodname.length>30)
      {
        document.getElementById('foodnamee').innerHTML="**Food Name length must be between 2 and 30**";
        return false;
      }
 }

 function validateextrafood()
{
    var regName = /^[A-Za-z ]+$/;
    var extrafood=document.getElementById('extrafood').value;

      if(extrafood =="")
      {
        document.getElementById('extrafoodd').innerHTML="**Please Enter Food Name**";
        return false;
      }
      if(regName.test(extrafood))
      {
        document.getElementById('extrafoodd').innerHTML=' ';
      }
      else
      {
        document.getElementById('extrafoodd').innerHTML='**Please Enter Character Only**';
      }
      if(extrafood.length<2 || extrafood.length>30)
      {
        document.getElementById('extrafoodd').innerHTML="**Food Name length must be between 2 and 30**";
        return false;
      }
 }

 function validateaddress()
 {
  var regName = /^[A-Za-z -,]+$/;
  var address=document.getElementById('address').value;

    if(address =="")
    {
      document.getElementById('addresss').innerHTML="**Please Enter Your Address**";
      return false;
    }
    if(regName.test(address))
    {
      document.getElementById('addresss').innerHTML=' ';
    }
    // else
    // {
    //   document.getElementById('addresss').innerHTML='**Please Enter Character Only**';
    // }
    if(address.length<2 || address.length>60)
    {
      document.getElementById('addresss').innerHTML="**Address length must be between 2 and 60**";
      return false;
    }
 }

 function validatemessage()
 {
  var regName = /^[A-Za-z ]+$/;
  var message=document.getElementById('message').value;

    if(message =="")
    {
      document.getElementById('messagee').innerHTML="**Please Enter Your Message**";
      return false;
    }
    if(regName.test(message))
    {
      document.getElementById('messagee').innerHTML=' ';
    }
    
    if(message.length<2 || message.length>150)
    {
      document.getElementById('messagee').innerHTML="**Message length must be between 2 and 30**";
      return false;
    }
 }

 function changeMedName(ch) {
    with(window.document.forms.order){
        if (ch == "Antibiotics") {
            medname[0].text = "Penicillin"
            medname[1].text = "Tetracycline"
            medname[2].text = "Keflex"
            medname[3].text = "Avelox"
            medname[4].text = "Cleocin"

            medname[0].value = "Penicillin"
            medname[1].value = "Tetracycline"
            medname[2].value = "Keflex"
            medname[3].value = "Avelox"
            medname[4].value = "Cleocin"
        }
        if (ch == "Ayurvedic") {
            medname[0].text = "Himalaya Chyvanprash"
            medname[1].text = "Himalaya Trifala"
            medname[2].text = "Arshkalp Vati"
            medname[3].text = "Tulsi Drink"
            medname[4].text = "Ortho Raksha"

            medname[0].value = "Himalaya Chyvanprash"
            medname[1].value = "Himalaya Trifala"
            medname[2].value = "Arshkalp Vati"
            medname[3].value = "Tulsi Drin"
            medname[4].value = "Ortho Raksha"
        }
        if (ch == "Antifungal") {
            medname[0].text = "Amphotericin"
            medname[1].text = "Nystatin"
            medname[2].text = "Terbinafine"
            medname[3].text = "Econazole"
            medname[4].text = "Clotrimazole"

            medname[0].value = "Amphotericin"
            medname[1].value = "Nystatin"
            medname[2].value = "Terbinafine"
            medname[3].value = "Econazole"
            medname[4].value = "Clotrimazole"
        }
        if (ch == "Herbal") {
            medname[0].text = "Turmeric"
            medname[1].text = "Elderberry"
            medname[2].text = "Ginkgo Bioloba"
            medname[3].text = "Ginseng"
            medname[4].text = "Echinacea"

            medname[0].value = "Turmeric"
            medname[1].value = "Elderberry"
            medname[2].value = "Ginkgo Bioloba"
            medname[3].value = "Ginseng"
            medname[4].value = "Echinacea"
        }
        if (ch == "Vitamins") {
            medname[0].text = "Folate"
            medname[1].text = "Niacin"
            medname[2].text = "Calcium"
            medname[3].text = "Biotin"
            medname[4].text = "Riboflavin"

            medname[0].value = "Folate"
            medname[1].value = "Niacin"
            medname[2].value = "Calcium"
            medname[3].value = "Biotin"
            medname[4].value = "Riboflavin"
        }
    }
}
