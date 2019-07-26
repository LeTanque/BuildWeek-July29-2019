define({ "api": [  {    "type": "get",    "url": "/api/users",    "title": "GET /api/users",    "version": "1.0.0",    "name": "Get_Users",    "group": "Users",    "examples": [      {        "title": "Request",        "content": "axios.get('/api/users');",        "type": "json"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "id",            "optional": false,            "field": "id",            "description": "<p>User Id</p>"          },          {            "group": "Success 200",            "type": "string",            "optional": false,            "field": "username",            "description": "<p>Username (required, must be unique)</p>"          },          {            "group": "Success 200",            "type": "number",            "optional": false,            "field": "bg_high",            "description": "<p>User Bg_high (required)</p>"          },          {            "group": "Success 200",            "type": "number",            "optional": false,            "field": "bg_low",            "description": "<p>User Bg_low (required)</p>"          },          {            "group": "Success 200",            "type": "number",            "optional": false,            "field": "bg_target_top",            "description": "<p>User Bg_target_top (defaults to 7, subject to change)</p>"          },          {            "group": "Success 200",            "type": "number",            "optional": false,            "field": "bg_target_bottom",            "description": "<p>User Bg_target_bottom (defaults to 3, subject to change)</p>"          },          {            "group": "Success 200",            "type": "number",            "optional": false,            "field": "height",            "description": "<p>User height</p>"          },          {            "group": "Success 200",            "type": "number",            "optional": false,            "field": "weight",            "description": "<p>User weight</p>"          },          {            "group": "Success 200",            "type": "date",            "optional": false,            "field": "birthdate",            "description": "<p>User birthdate</p>"          },          {            "group": "Success 200",            "type": "date",            "optional": false,            "field": "diagnosis_date",            "description": "<p>User diagnosis_date</p>"          },          {            "group": "Success 200",            "type": "string",            "optional": false,            "field": "gender",            "description": "<p>User gender</p>"          },          {            "group": "Success 200",            "type": "string",            "optional": false,            "field": "diabetes_type",            "description": "<p>Diabetes type (usually 1 or 2)</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "[\n    {\n           \"id\": 1,\n           \"username\": \"Patient Zero\",\n           \"bg_high\": 7,\n           \"bg_low\": 3,\n           \"bg_target_top\": 7,\n           \"bg_target_bottom\": 3,\n           \"height\": null,\n           \"weight\": null,\n           \"birthdate\": null,\n           \"diagnosis_date\": null,\n           \"gender\": null,\n           \"diabetes_type\": null,\n       },\n       {\n           \"id\": 2,\n           \"username\": \"Patient One\",\n           \"bg_high\": 6,\n           \"bg_low\": 4,\n           \"bg_target_top\": 7,\n           \"bg_target_bottom\": 3,\n           \"height\": null,\n           \"weight\": null,\n           \"birthdate\": null,\n           \"diagnosis_date\": null,\n           \"gender\": null,\n           \"diabetes_type\": null\n       }\n   ]",          "type": "json"        }      ]    },    "filename": "api/routes/routesUsers.js",    "groupTitle": "Users",    "sampleRequest": [      {        "url": "https://glucose-iq.herokuapp.com/api/users"      }    ]  }] });
