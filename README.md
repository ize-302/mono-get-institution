## mono get institution

Get a specific institution listed in mono's [`institutions`](https://api.withmono.com/v1/institutions) endpoint

### Usage
```
https://mono-get-institution.herokuapp.com/v1/institutions/090267
```

#### Response
```json
{
  ...,
  "name": "Kuda Bank",
  "type": "PERSONAL_BANKING",
  "icon": "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/kuda-bank-icon.png",
  "identifier": "mono.connections.kudabank",
  "primaryColor": "#40196D",
  ...
}
```