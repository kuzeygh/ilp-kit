define({ "api": [
  {
    "type": "post",
    "url": "/auth/change-password",
    "title": "Change Password",
    "name": "ChangePassword",
    "group": "Auth",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Change user password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>new password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repeatPassword",
            "description": "<p>new password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>reset code sent to the user email</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Change Password",
        "content": "curl -X POST\nhttps://wallet.example/auth/change-password",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1\n  \"username\": \"alice\",\n  \"email\": \"alice@example.com\",\n  \"email_verified\": true,\n  \"github_id\": null,\n  \"destination\": \"451744\",\n  \"profile_picture\": \"https://wallet.example/api/users/alice/profilepic\",\n  \"name\": \"Alice\",\n  \"phone\": null,\n  \"address1\": null,\n  \"address2\": null,\n  \"city\": null,\n  \"region\": null,\n  \"country\": null,\n  \"zip_code\": null,\n  \"invite_code\": null,\n  \"identifier\": \"alice@wallet.example\",\n  \"balance\": 987,\n  \"minimum_allowed_balance\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/profilepic",
    "title": "Change Profile Picture",
    "name": "ChangeProfilePicture",
    "group": "Auth",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Change user profile picture</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>picture</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Change Password",
        "content": "curl -X POST\nhttps://wallet.example/auth/profilepic",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1\n  \"username\": \"alice\",\n  \"email\": \"alice@example.com\",\n  \"email_verified\": true,\n  \"github_id\": null,\n  \"destination\": \"451744\",\n  \"profile_picture\": \"https://wallet.example/api/users/alice/profilepic\",\n  \"name\": \"Alice\",\n  \"phone\": null,\n  \"address1\": null,\n  \"address2\": null,\n  \"city\": null,\n  \"region\": null,\n  \"country\": null,\n  \"zip_code\": null,\n  \"invite_code\": null,\n  \"identifier\": \"alice@wallet.example\",\n  \"balance\": 987,\n  \"minimum_allowed_balance\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/forgot-password",
    "title": "Forgot Password",
    "name": "ForgotPassword",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Get an email to change the password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource",
            "description": "<p>username or email</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Forgot Password",
        "content": "curl -X POST\nhttps://wallet.example/auth/forgot-password",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/github",
    "title": "Github Auth",
    "name": "Github_Auth",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Github OAuth (used for cookie based auth)</p>",
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/github/callback",
    "title": "Github Auth Callback",
    "name": "Github_Auth_Callback",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Github Auth Callback (used for cookie based auth)</p>",
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/load",
    "title": "Load",
    "name": "Load",
    "group": "Auth",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get currently authenticated user (used for cookie based auth)</p>",
    "examples": [
      {
        "title": "Load",
        "content": "curl -X GET\nhttps://wallet.example/auth/load",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1\n  \"username\": \"alice\",\n  \"email\": \"alice@example.com\",\n  \"email_verified\": true,\n  \"github_id\": null,\n  \"destination\": \"451744\",\n  \"profile_picture\": \"https://wallet.example/api/users/alice/profilepic\",\n  \"name\": \"Alice\",\n  \"phone\": null,\n  \"address1\": null,\n  \"address2\": null,\n  \"city\": null,\n  \"region\": null,\n  \"country\": null,\n  \"zip_code\": null,\n  \"invite_code\": null,\n  \"identifier\": \"alice@wallet.example\",\n  \"balance\": 987,\n  \"minimum_allowed_balance\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Login (used for cookie based auth)</p>",
    "examples": [
      {
        "title": "Login",
        "content": "curl -X POST -H \"Content-Type: application/json\" -d\n'{\n    \"username\": \"alice\",\n    \"password\": \"alice\"\n}'\nhttps://wallet.example/auth/login",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1\n  \"username\": \"alice\",\n  \"email\": \"alice@example.com\",\n  \"email_verified\": true,\n  \"github_id\": null,\n  \"destination\": \"451744\",\n  \"profile_picture\": \"https://wallet.example/api/users/alice/profilepic\",\n  \"name\": \"Alice\",\n  \"phone\": null,\n  \"address1\": null,\n  \"address2\": null,\n  \"city\": null,\n  \"region\": null,\n  \"country\": null,\n  \"zip_code\": null,\n  \"invite_code\": null,\n  \"identifier\": \"alice@wallet.example\",\n  \"balance\": 987,\n  \"minimum_allowed_balance\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/logout",
    "title": "Logout",
    "name": "Logout",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Logout (used for cookie based auth)</p>",
    "examples": [
      {
        "title": "Logout",
        "content": "curl -X POST\nhttps://wallet.example/auth/logout",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/invites/:code",
    "title": "Delete invite code",
    "name": "DeleteInvites",
    "group": "Invites",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Invite code (uuid)</p>"
          }
        ]
      }
    },
    "description": "<p>Delete invite code</p>",
    "examples": [
      {
        "title": "Delete invite code",
        "content": "curl -X DELETE -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttps://wallet.example/invites/eaee4ea6-d5a4-4cd8-b78e-97a34374352c",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/invites.js",
    "groupTitle": "Invites"
  },
  {
    "type": "get",
    "url": "/invites",
    "title": "Get an invite code",
    "name": "GetInvite",
    "group": "Invites",
    "version": "1.0.0",
    "description": "<p>Get an invite code</p>",
    "examples": [
      {
        "title": "Get an invite code",
        "content": "curl -X GET\nhttps://wallet.example/invites/6a6a7ebc-0e18-49d3-8c9c-646caa56f213",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"6a6a7ebc-0e18-49d3-8c9c-646caa56f213\",\n    \"amount\": 100,\n    \"claimed\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/invites.js",
    "groupTitle": "Invites"
  },
  {
    "type": "get",
    "url": "/invites",
    "title": "Get all invite codes",
    "name": "GetInvites",
    "group": "Invites",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Get all invite codes</p>",
    "examples": [
      {
        "title": "Get all invite codes",
        "content": "curl -X GET -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttps://wallet.example/invites",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": " HTTP/1.1 200 OK\n [\n   {\n     \"code\": \"6a6a7ebc-0e18-49d3-8c9c-646caa56f213\",\n     \"amount\": 100,\n     \"claimed\": false,\n     \"created_at\": \"2017-05-11T22:51:32.737Z\",\n     \"updated_at\": \"2017-05-11T22:51:32.737Z\",\n     \"user_id\": null,\n     \"User\": null\n  },\n  {\n     \"code\": \"2cd765ce-4b15-4e40-99a0-fa4cd8ddce93\",\n     \"amount\": 200,\n      \"claimed\": false,\n      \"created_at\": \"2017-05-11T22:51:21.642Z\",\n      \"updated_at\": \"2017-05-11T22:51:21.642Z\",\n      \"user_id\": null,\n      \"User\": null\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/invites.js",
    "groupTitle": "Invites"
  },
  {
    "type": "post",
    "url": "/invites",
    "title": "Create an invite code",
    "name": "PostInvites",
    "group": "Invites",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Create an invite code</p>",
    "examples": [
      {
        "title": "Create an invite code",
        "content": "curl -X POST -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -d\n'{\n    \"amount\": \"1000\"\n}'\nhttps://wallet.example/invites",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"amount\": 1000,\n    \"code\": \"eaee4ea6-d5a4-4cd8-b78e-97a34374352c\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/invites.js",
    "groupTitle": "Invites"
  },
  {
    "type": "GET",
    "url": "/config",
    "title": "Wallet config",
    "name": "GetConfig",
    "group": "Misc",
    "version": "1.0.0",
    "description": "<p>Get wallet config</p>",
    "examples": [
      {
        "title": "Get wallet config",
        "content": "curl -X GET\nhttps://wallet.example/config",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"clientUri\": \"https://wallet.example\",\n  \"ledgerUri\": \"https://wallet.example/ledger\",\n  \"currencyCode\": \"USD\",\n  \"currencyScale\": 9,\n  \"currencySymbol\": \"$\",\n  \"registration\": true,\n  \"antiFraud\": false,\n  \"title\": \"Wallet Name\",\n  \"track\": {},\n  \"githubAuth\": false,\n  \"versions\": {\n    \"current\": \"2.0.2\",\n    \"hash\": \"bc056cc\",\n    \"latest\": \"2.0.2\"\n  },\n  \"settlementMethods\": [\n    {\n      \"id\": \"7b4a73b0-19c5-46ed-8905-febeae2b0a05\",\n      \"name\": \"Paypal\",\n      \"type\": \"paypal\",\n      \"description\": null,\n      \"uri\": null,\n      \"logo\": \"https://wallet.example/paypal.png\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/misc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/webfinger",
    "title": "Get webfinger info",
    "name": "GetWebfinger",
    "group": "Misc",
    "version": "1.0.0",
    "description": "<p>Get webfinger info</p>",
    "examples": [
      {
        "title": "Get webfinger info",
        "content": "curl -X GET\nhttps://wallet.example/webfinger?resource=acct:alice@wallet.example",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"subject\": \"acct:alice@wallet.example\",\n  \"links\": [\n    {\n      \"rel\": \"https://interledger.org/rel/ledgerUri\",\n      \"href\": \"https://wallet.example/ledger\"\n    },\n    {\n      \"rel\": \"https://interledger.org/rel/socketIOUri\",\n      \"href\": \"https://wallet.example/socket.io\"\n    },\n    {\n      'rel': 'https://interledger.org/rel/ilpAddress',\n      'href': \"alice.wallet\"\n    },\n    {\n      \"rel\": \"https://interledger.org/rel/sender/payment\",\n      \"href\": \"https://wallet.example/payments\"\n    },\n    {\n      \"rel\": \"https://interledger.org/rel/sender/quote\",\n      \"href\": \"https://wallet.example/payments/quote\"\n    },\n    {\n      \"rel\": \"https://interledger.org/rel/spsp/v2\",\n      \"href\": \"https://wallet.example/spsp/alice\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/webfinger.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/parse/destination",
    "title": "Parse destination",
    "name": "ParseDestination",
    "group": "Misc",
    "version": "1.0.0",
    "description": "<p>Parse a destination</p>",
    "examples": [
      {
        "title": "Parse a destination",
        "content": "curl -X GET\nhttps://wallet.example/parse/destination?destination=alice@wallet.example",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ledgerUri\": \"https://wallet.example/ledger\",\n    \"paymentUri\": \"https://wallet.example/api/spsp/alice\",\n    \"ilpAddress\": \"wallet.alice\",\n    \"identifier\": \"alice@wallet.example\",\n    \"currencyCode\": \"USD\",\n    \"currencySymbol\": \"$\",\n    \"name\": \"Alice\",\n    \"imageUrl\": \"https://wallet.example/api/users/alice/profilepic\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/misc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "get",
    "url": "/health",
    "title": "Health check",
    "name": "health",
    "group": "Misc",
    "version": "1.0.0",
    "description": "<p>Health check</p>",
    "examples": [
      {
        "title": "Health check",
        "content": "curl -X GET\nhttps://wallet.example/health",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/health.js",
    "groupTitle": "Misc"
  },
  {
    "type": "put",
    "url": "/payments/:id",
    "title": "Make payment",
    "name": "PutPayments",
    "group": "Payment",
    "version": "1.0.0",
    "description": "<p>Make payment</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>generated payment uuid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>destination</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourceAmount",
            "description": "<p>source amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinationAmount",
            "description": "<p>destination amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memo",
            "description": "<p>text message for the destination</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Make a payment",
        "content": "curl -X PUT -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -H \"Content-Type: application/json\" -d\n'{\n    \"quote\": {QuoteResponse},\n    \"message\": \"Here's some money for you\"\n}'\nhttps://wallet.example/payments/9efa70ec-08b9-11e6-b512-3e1d05defe78",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/payments.js",
    "groupTitle": "Payment"
  },
  {
    "type": "POST",
    "url": "/spsp/:username",
    "title": "SPSP query",
    "name": "Query",
    "group": "Payment",
    "version": "1.0.0",
    "description": "<p>SPSP Query</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "SPSP Query",
        "content": "curl -X POST -H \"Content-Type: application/json\"\nhttps://wallet.example/api/spsp/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"destination_account\": \"wallet.alice.iD4LnxavIqs4CKbwVkelHEluk5VTnH8Vw\",\n    \"shared_secret\": \"dwGaLn1pIrrOmmq6Xk362g\",\n    \"maximum_destination_amount\": \"18446744073709552000\",\n    \"minimum_destination_amount\": \"1\",\n    \"ledger_info\": {\n        \"currency_code\": \"USD\",\n        \"currency_scale\": 9\n    },\n    \"receiver_info\": {\n        \"name\": \"Alice Jan\",\n        \"image_url\": \"https://wallet.example/api/users/alice/profilepic\",\n        \"identifier\": \"alice@wallet.example\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/payments.js",
    "groupTitle": "Payment"
  },
  {
    "type": "POST",
    "url": "/payments/quote",
    "title": "Request a quote",
    "name": "Quote",
    "group": "Payment",
    "version": "1.0.0",
    "description": "<p>Request a quote</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>destination webfinger account</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourceAmount",
            "description": "<p>source amount (optional, used if destinationAmount is not provided)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinationAmount",
            "description": "<p>destination amount (optional, used if sourceAmount is not provided)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request a quote",
        "content": "curl -X POST -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -H \"Content-Type: application/json\" -d\n'{\n    \"destination\": \"bob@wallet.example\",\n    \"destinationAmount\": \"10\"\n}'\nhttps://wallet.example/payments/quote",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"406e6682-b18e-4e8b-8235-e88ad16a15a0\",\n  \"sourceAmount\": \"1\",\n  \"destinationAmount\": \"1\",\n  \"destinationAccount\": \"wallet.bob._1nG4HIOEdgsGt03lQnSA6Bqv9Ju55vtA\",\n  \"connectorAccount\": \"wallet.bob._1nG4HIOEdgsGt03lQnSA6Bqv9Ju55vtA\",\n  \"sourceExpiryDuration\": \"10\",\n  \"spsp\": {\n    \"destination_account\": \"wallet.bob._1nG4HIOEdgsGt03lQnSA6Bqv9Ju55vtA\",\n    \"shared_secret\": \"1pvx93ZEd8gTGHfiqKhD5w\",\n    \"maximum_destination_amount\": \"18446744073709552000\",\n    \"minimum_destination_amount\": \"1\",\n    \"ledger_info\": {\n      \"currency_code\": \"USD\",\n      \"currency_scale\": 9\n    },\n    \"receiver_info\": {\n      \"name\": \"\",\n      \"image_url\": \"https://wallet.example/api/users/bob/profilepic\",\n      \"identifier\": \"bob@wallet.example\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/payments.js",
    "groupTitle": "Payment"
  },
  {
    "type": "delete",
    "url": "/peers/:id",
    "title": "Delete peer",
    "name": "DeletePeers",
    "group": "Peer",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Peer id</p>"
          }
        ]
      }
    },
    "description": "<p>Delete peer</p>",
    "examples": [
      {
        "title": "Delete peer",
        "content": "curl -X DELETE -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttps://wallet.example/peers/963d89dc-a211-456c-8e9f-897d379aae2a",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/peers.js",
    "groupTitle": "Peer"
  },
  {
    "type": "GET",
    "url": "/peers",
    "title": "Get all peers",
    "name": "GetPeers",
    "group": "Peer",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Get all peers</p>",
    "examples": [
      {
        "title": "Get all peers",
        "content": "curl -X GET -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttps://wallet.example/peers",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n     \"id\": \"963d89dc-a211-456c-8e9f-897d379aae2a\",\n     \"hostname\": \"wallet.example\",\n     \"limit\": 100000000000,\n     \"currencyCode\": \"USD\",\n     \"currencyScale\": 9,\n     \"destination\": \"269276\",\n     \"created_at\": \"2017-06-09T01:13:24.236Z\",\n     \"updated_at\": \"2017-06-09T01:13:24.236Z\",\n     \"online\": true\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/peers.js",
    "groupTitle": "Peer"
  },
  {
    "type": "post",
    "url": "/peers",
    "title": "Add a peer",
    "name": "PostPeers",
    "group": "Peer",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Add a peer</p>",
    "examples": [
      {
        "title": "Add a peer",
        "content": "curl -X POST -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -d\n'{\n    \"hostname\": \"wallet.example\",\n    \"limit\": \"100\",\n    \"currencyCode\": \"USD\"\n}'\nhttps://wallet.example/peers",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "201 Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"id\": \"963d89dc-a211-456c-8e9f-897d379aae2a\",\n   \"hostname\": \"wallet.example\",\n   \"limit\": 100000000000,\n   \"currencyCode\": \"USD\",\n   \"currencyScale\": 9,\n   \"destination\": \"269276\",\n   \"created_at\": \"2017-06-09T01:13:24.236Z\",\n   \"updated_at\": \"2017-06-09T01:13:24.236Z\",\n   \"online\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/peers.js",
    "groupTitle": "Peer"
  },
  {
    "type": "post",
    "url": "/peers/:id",
    "title": "Update peer",
    "name": "PutPeers",
    "group": "Peer",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Update peer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Peer id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Update peer",
        "content": "curl -X PUT -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -d\n'{\n    \"limit\": \"200\"\n}'\nhttps://wallet.example/peers/963d89dc-a211-456c-8e9f-897d379aae2a",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": \"963d89dc-a211-456c-8e9f-897d379aae2a\",\n   \"hostname\": \"wallet.example\",\n   \"limit\": 200000000000,\n   \"currencyCode\": \"USD\",\n   \"currencyScale\": 9,\n   \"destination\": \"269276\",\n   \"created_at\": \"2017-06-09T01:13:24.236Z\",\n   \"updated_at\": \"2017-06-09T01:13:24.236Z\",\n   \"online\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/peers.js",
    "groupTitle": "Peer"
  },
  {
    "type": "post",
    "url": "/peers/:id/settlement_methods",
    "title": "Get peer settlement methods",
    "name": "getSettlementMethods",
    "group": "Peer",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Get peer settlement methods</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Peer id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get peer settlement methods",
        "content": "curl -X GET -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -d\nhttps://wallet.example/peers/963d89dc-a211-456c-8e9f-897d379aae2a/settlement_methods",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": \"e985594e-5e39-45bc-b856-4d4550aaeb23\",\n    \"name\": \"Paypal\",\n    \"type\": \"paypal\",\n    \"description\": null,\n    \"uri\": \"https://wallet2.example/settle/paypal/122940?amount=2.00598\",\n    \"logo\": \"https://wallet2.example/paypal.png\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/peers.js",
    "groupTitle": "Peer"
  },
  {
    "type": "get",
    "url": "/receivers/:username",
    "title": "Get receiver details",
    "name": "GetReceiver",
    "group": "Receiver",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>receiver username</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get receiver details",
        "content": "curl -X GET\nhttps://wallet.example/receivers/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"type\": \"payee\",\n  \"account\": \"wallet.alice\",\n  \"currency_code\": \"USD\",\n  \"currency_scale\": 2,\n  \"name\": \"Alice Faye\",\n  \"image_url\": \"https://server.example/picture.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "Receiver"
  },
  {
    "type": "GET",
    "url": "/settlements/:id",
    "title": "Get Settlement",
    "name": "GetSettlement",
    "group": "Settlement",
    "version": "1.0.0",
    "description": "<p>Get Settlement</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>settlement id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get destination",
        "content": "curl -X GET\nhttps://wallet.example/settlements/da978aa3-93c1-4899-8507-6888cb4ce8ca",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"amount\": 110,\n    \"currency\": \"USD\",\n    \"method\": \"paypal\",\n    \"date\": \"2017-03-16T17:03:02.767Z\",\n    \"peer\": null,\n    \"user\": \"alice\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/settlements.js",
    "groupTitle": "Settlement"
  },
  {
    "type": "GET",
    "url": "/settlements",
    "title": "Get Settlements",
    "name": "GetSettlement",
    "group": "Settlement",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Get Settlement</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>settlement type. 'peer' or 'user'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get destination",
        "content": "curl -X GET -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttps://wallet.example/settlements",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": \"da978aa3-93c1-4899-8507-6888cb4ce8ca\",\n       \"amount\": 110,\n       \"currency\": \"USD\",\n       \"created_at\": \"2017-03-16T17:03:02.767Z\",\n       \"updated_at\": \"2017-03-16T17:03:02.767Z\",\n       \"peer_id\": null,\n       \"user_id\": 2,\n       \"settlement_method_id\": \"7b4a73b0-19c5-46ed-8905-febeae2b0a05\",\n       \"Peer\": null,\n       \"User\": {\n           \"id\": 2,\n           \"username\": \"alice\",\n           \"email\": \"alice@example.com\",\n           \"email_verified\": true,\n           \"github_id\": null,\n           \"destination\": \"451744\",\n           \"profile_picture\": \"upload_3a252b77b8f4c76f3037d7df30892441_square.jpeg\",\n           \"name\": \"Alice\",\n           \"phone\": null,\n           \"address1\": null,\n           \"address2\": null,\n           \"city\": null,\n           \"region\": null,\n           \"country\": null,\n           \"zip_code\": null,\n           \"created_at\": \"2016-12-02T22:27:49.360Z\",\n           \"updated_at\": \"2017-06-02T20:20:29.214Z\",\n           \"invite_code\": null\n       },\n       \"SettlementMethod\": {\n           \"id\": \"7b4a73b0-19c5-46ed-8905-febeae2b0a05\",\n           \"type\": \"paypal\",\n           \"name\": \"Paypal\",\n           \"logo\": null,\n           \"description\": null,\n           \"uri\": null,\n           \"enabled\": true,\n           \"options\": {\n               \"clientId\": \"...\",\n               \"secret\": \"...\",\n               \"sandbox\": true\n           },\n           \"created_at\": \"2017-02-02T19:20:04.190Z\",\n           \"updated_at\": \"2017-03-07T01:48:29.769Z\"\n       },\n       \"ActivityLogs\": [\n           {\n               \"id\": \"67407a5e-08df-46e2-b7fe-41b46b067626\",\n               \"stream_id\": null,\n               \"created_at\": \"2017-03-16T17:03:02.813Z\",\n               \"updated_at\": \"2017-03-16T17:03:02.813Z\",\n               \"user_id\": 2,\n               \"ActivityLogsItem\": {\n                   \"id\": 4482,\n                   \"activity_log_id\": \"67407a5e-08df-46e2-b7fe-41b46b067626\",\n                   \"item_type\": \"settlement\",\n                   \"item_id\": \"da978aa3-93c1-4899-8507-6888cb4ce8ca\",\n                   \"created_at\": \"2017-03-16T17:03:02.847Z\",\n                   \"updated_at\": \"2017-03-16T17:03:02.847Z\"\n               }\n           }\n       ]\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/settlements.js",
    "groupTitle": "Settlement"
  },
  {
    "type": "GET",
    "url": "/destinations/:destination",
    "title": "Get destination",
    "name": "GetSettlementDestination",
    "group": "Settlement",
    "version": "1.0.0",
    "description": "<p>Get all settlement methods</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "destination",
            "description": "<p>destination</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get destination",
        "content": "curl -X GET\nhttps://wallet.example/destinations/813133",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"type\": \"user\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/settlements.js",
    "groupTitle": "Settlement"
  },
  {
    "type": "delete",
    "url": "/settlement_methods/:id",
    "title": "Delete settlement method",
    "name": "DeleteSettlementMethod",
    "group": "SettlementMethod",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Settlement Method id</p>"
          }
        ]
      }
    },
    "description": "<p>Delete Settlement Method</p>",
    "examples": [
      {
        "title": "Delete Settlement Method",
        "content": "curl -X DELETE -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttps://wallet.example/settlement_methods/2e0e85a6-64f1-4c57-aee4-898237a27486",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/settlement_methods.js",
    "groupTitle": "SettlementMethod"
  },
  {
    "type": "GET",
    "url": "/settlement_methods",
    "title": "Get all settlement methods",
    "name": "GetSettlementMethods",
    "group": "SettlementMethod",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Get all settlement methods</p>",
    "examples": [
      {
        "title": "Get all settlement methods",
        "content": "curl -X GET -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttps://wallet.example/settlement_methods",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"name\": \"Paypal\",\n    \"type\": \"paypal\",\n    \"logo\": null,\n    \"description\": null,\n    \"uri\": null,\n    \"logoUrl\": \"https://wallet.com/paypal.png\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/settlement_methods.js",
    "groupTitle": "SettlementMethod"
  },
  {
    "type": "POST",
    "url": "/settlement_methods",
    "title": "Add a settlement method",
    "name": "PostSettlementMethods",
    "group": "SettlementMethod",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Add a settlement method</p>",
    "examples": [
      {
        "title": "Add a settlement method",
        "content": "curl -X POST -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -d\n'{\n    \"type\": \"Paypal\"\n}'\nhttps://wallet.example/peers",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "201 Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"id\": \"2e0e85a6-64f1-4c57-aee4-898237a27486\",\n    \"name\": \"Paypal\",\n    \"type\": \"paypal\",\n    \"enabled\": false,\n    \"updated_at\": \"2017-06-14T17:52:20.742Z\",\n    \"created_at\": \"2017-06-14T17:52:20.742Z\",\n    \"logo\": null,\n    \"description\": null,\n    \"uri\": null,\n    \"options\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/settlement_methods.js",
    "groupTitle": "SettlementMethod"
  },
  {
    "type": "put",
    "url": "/settlement_methods/:id",
    "title": "Update settlement method",
    "name": "PutSettlementMethods",
    "group": "SettlementMethod",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Update settlement method</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Settlement Method id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Update settlement method",
        "content": "curl -X PUT -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -d\n'{\n    \"enabled\": true\n}'\nhttps://wallet.example/settlement_methods/2e0e85a6-64f1-4c57-aee4-898237a27486",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"2e0e85a6-64f1-4c57-aee4-898237a27486\",\n    \"name\": \"Paypal\",\n    \"type\": \"paypal\",\n    \"enabled\": true,\n    \"updated_at\": \"2017-06-14T17:52:20.742Z\",\n    \"created_at\": \"2017-06-14T17:52:20.742Z\",\n    \"logo\": null,\n    \"description\": null,\n    \"uri\": null,\n    \"options\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/settlement_methods.js",
    "groupTitle": "SettlementMethod"
  },
  {
    "type": "POST",
    "url": "/settlements/:destination/paypal",
    "title": "Get Paypal link",
    "name": "PostPaypalLink",
    "group": "Settlement",
    "version": "1.0.0",
    "description": "<p>Get Paypal link</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "destination",
            "description": "<p>destination</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get destination",
        "content": "curl -X POST\nhttps://wallet.example/settlements/813133/paypal",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"approvalLink\": \"https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-7R410477WT7455126\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/settlements.js",
    "groupTitle": "Settlement"
  },
  {
    "type": "POST",
    "url": "/settlements/:destination",
    "title": "Settle",
    "name": "PostSettle",
    "group": "Settlement",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Settle</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "destination",
            "description": "<p>destination</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Settle",
        "content": "curl -X POST -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -d\n'{\n    \"amount\": \"10\",\n    \"currency\": \"USD\",\n    \"settlement_method\": \"7b4a73b0-19c5-46ed-8905-febeae2b0a05\"\n}'\nhttps://wallet.example/settlements/813133",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "204 Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/settlements.js",
    "groupTitle": "Settlement"
  },
  {
    "type": "get",
    "url": "/users/:username",
    "title": "Get user",
    "name": "GetUser",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Get user</p>",
    "examples": [
      {
        "title": "Get user",
        "content": "curl -X GET -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttps://wallet.example/users/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"alice\",\n  \"name\": \"Alice Faye\",\n  \"balance\": \"1000\",\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/:username",
    "title": "Create a user",
    "name": "PostUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Post user",
        "content": "curl -X POST -H \"Content-Type: application/json\" -d\n'{\n    \"password\": \"alice\"\n}'\nhttps://wallet.example/users/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"username\": \"alice\",\n  \"balance\": \"1000\",\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:username",
    "title": "Update user",
    "name": "PutUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Update user email",
        "content": "curl -X PUT -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -H \"Content-Type: application/json\" -d\n'{\n    \"email\": \"alice@example.com\"\n    \"name\": \"Alice Faye\"\n}'\nhttps://wallet.example/users/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"alice\",\n  \"name\": \"Alice Faye\",\n  \"balance\": \"1000\",\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/:username/resend-verification",
    "title": "Resend verification email",
    "name": "ResendVerificationEmail",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Resend verification email",
        "content": "curl -X POST\nhttps://wallet.example/users/alice/resend-verification",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:username/verify",
    "title": "Verify user email address",
    "name": "VerifyUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>verification code</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Verify user email address",
        "content": "curl -X PUT -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -H \"Content-Type: application/json\" -d\n'{\n    \"code\": \"1f7aade2946667fac85ebaf7259182ead6b1fe062b5e8bb0ffa1b9d417431acb\"\n}'\nhttps://wallet.example/users/alice/verify",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"alice\",\n  \"balance\": \"1000\",\n  \"id\": 1,\n  \"email_verified\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/withdrawals",
    "title": "Get all withdrawals",
    "name": "GetWithdrawals",
    "group": "Withdrawal",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Get all withdrawals</p>",
    "examples": [
      {
        "title": "Get all withdrawals",
        "content": "curl -X GET -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttps://wallet.example/withdrawals",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": \"23163cfd-cc83-4991-9b10-f89d1b2fc095\",\n       \"amount\": 1,\n       \"status\": \"pending\",\n       \"transfer_id\": \"abf0f73f-4c64-4c84-864d-a3b1a1df2faa\",\n       \"created_at\": \"2017-06-13T22:36:18.899Z\",\n       \"updated_at\": \"2017-06-13T22:36:18.899Z\",\n       \"user_id\": 2,\n       \"User\": {\n           \"id\": 2,\n           \"username\": \"alice\",\n           \"email\": \"alice@example.com\",\n           \"email_verified\": true,\n           \"github_id\": null,\n           \"destination\": \"451744\",\n           \"profile_picture\": \"upload_3a252b77b8f4c76f3037d7df30892441_square.jpeg\",\n           \"name\": \"Alice Jan\",\n           \"phone\": null,\n           \"address1\": null,\n           \"address2\": null,\n           \"city\": null,\n           \"region\": null,\n           \"country\": null,\n           \"zip_code\": null,\n           \"created_at\": \"2016-12-02T22:27:49.360Z\",\n           \"updated_at\": \"2017-06-02T20:20:29.214Z\",\n           \"invite_code\": null\n       },\n       \"ActivityLogs\": [\n           {\n               \"id\": \"8289447f-7269-420e-894e-d61cbf2ffd87\",\n               \"stream_id\": null,\n               \"created_at\": \"2017-06-13T22:36:18.964Z\",\n               \"updated_at\": \"2017-06-13T22:36:18.964Z\",\n               \"user_id\": 2,\n               \"ActivityLogsItem\": {\n                   \"id\": 4894,\n                   \"activity_log_id\": \"8289447f-7269-420e-894e-d61cbf2ffd87\",\n                   \"item_type\": \"withdrawal\",\n                   \"item_id\": \"23163cfd-cc83-4991-9b10-f89d1b2fc095\",\n                   \"created_at\": \"2017-06-13T22:36:18.995Z\",\n                   \"updated_at\": \"2017-06-13T22:36:18.995Z\"\n               }\n           }\n       ]\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/withdrawals.js",
    "groupTitle": "Withdrawal"
  },
  {
    "type": "POST",
    "url": "/withdrawals/:id",
    "title": "Withdraw",
    "name": "PutWithdrawals",
    "group": "Withdrawal",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Withdraw</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>withdrawal id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Withdraw",
        "content": "curl -X POST -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -d\n'{\n    \"amount\": 10\n}'\nhttps://wallet.example/withdrawals/23163cfd-cc83-4991-9b10-f89d1b2fc095",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "201 Response:",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/withdrawals.js",
    "groupTitle": "Withdrawal"
  },
  {
    "type": "PUT",
    "url": "/withdrawals/:id",
    "title": "Update withdrawal",
    "name": "PutWithdrawals",
    "group": "Withdrawal",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Update withdrawal</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>withdrawal id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Update withdrawal",
        "content": "curl -X PUT -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -d\n'{\n    \"status\": \"complete\"\n}'\nhttps://wallet.example/withdrawals/23163cfd-cc83-4991-9b10-f89d1b2fc095",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"id\": \"23163cfd-cc83-4991-9b10-f89d1b2fc095\",\n  \"amount\": 1,\n  \"status\": \"complete\",\n  \"transfer_id\": \"abf0f73f-4c64-4c84-864d-a3b1a1df2faa\",\n  \"created_at\": \"2017-06-13T22:36:18.899Z\",\n  \"updated_at\": \"2017-06-15T18:51:42.372Z\",\n  \"user_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/withdrawals.js",
    "groupTitle": "Withdrawal"
  }
] });
