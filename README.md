# ifsc-pack
Trying out a npm package 


This app utilizes Razorpay's IFSC code api ifsc.razorpay.com



# install
```
npm i ifsc-pack
```

# sample

```
const pack = require("ifsc-pack")

pack.get('PYTM0000001').then(res=> console.log(res))
```

# Response 
```
{
  BRANCH: 'Paytm Payments Bank IMPS',
  CENTRE: 'Gautam Buddh Nagar',
  DISTRICT: 'Gautam Buddh Nagar',
  STATE: 'UTTAR PRADESH',
  ADDRESS: 'B-121,Sector-5,Noida-201301',
  CONTACT: '+911133996699',
  IMPS: true,
  CITY: 'NOIDA',
  UPI: true,
  MICR: '',
  RTGS: true,
  NEFT: true,
  SWIFT: '',
  BANK: 'Paytm Payments Bank',
  BANKCODE: 'PYTM',
  IFSC: 'PYTM0000001'
}
```

# Credits 

[ifsc finder](https://github.com/surajsnanavare/ifsc_finder)