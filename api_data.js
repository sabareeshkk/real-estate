define({ "api": [
  {
    "type": "get",
    "url": "/properties/search",
    "title": "Search properties for sale.",
    "name": "GetProperties",
    "group": "Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "defaultValue": "Mumbai",
            "description": "<p>Name of the city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locality",
            "defaultValue": "Nahur",
            "description": "<p>Name of the locality.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sale_type",
            "defaultValue": "sale|rent",
            "description": "<p>Property that looking for.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "p_type",
            "defaultValue": "Residential Apartment",
            "description": "<p>--&gt;sale|rent Apartment type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "u_price",
            "defaultValue": "16700000",
            "description": "<p>Budget upper range.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "l_price",
            "defaultValue": "15700000",
            "description": "<p>Budget lower range.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bhk_type",
            "defaultValue": "2 BHK",
            "description": "<p>--&gt;sale|rent Property type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "l_area",
            "defaultValue": "1000-->sale|rent",
            "description": "<p>property area in square feet.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "u_area",
            "defaultValue": "2000-->sale|rent",
            "description": "<p>prperty area in sq.ft.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "furn_type",
            "defaultValue": "Furnished-->sale|rent",
            "description": "<p>furnish type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "amen_srch",
            "defaultValue": "Lift-->sale|rent",
            "description": "<p>amenities type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pg_room_type",
            "defaultValue": "private--pg",
            "description": "<p>pg property type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pg_rm_beds",
            "defaultValue": "1-->pg",
            "description": "<p>pg number of beds in room.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dlr_name",
            "defaultValue": "Zolostays",
            "description": "<p>pg brand name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pg_ml_avail",
            "defaultValue": "Yes",
            "description": "<p>pg meals availabe.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pg_gender",
            "defaultValue": "Girls",
            "description": "<p>pg gender type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results",
            "description": "<p>Response information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "results.data",
            "description": "<p>Response data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.data._id",
            "description": "<p>Properties id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.data.location",
            "description": "<p>Location points.LONG-FIRST,LAT.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.data.s_name",
            "description": "<p>Society name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.data.p_locality",
            "description": "<p>Locality name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.data.bhk_type",
            "description": "<p>Property type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Error code and message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "errors.code",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errors.msg",
            "description": "<p>Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"results\": {\n         \"data\":[{\n           \"_id\": \"5f13d7b4299bf404e1ca83d6\",\n           \"location\": {\n               \"type\": \"Point\",\n               \"coordinates\": [\n                   72.947149,\n                   19.159949\n               ]\n           },\n           \"s_name\": \"Atmosphere\",\n           \"p_locality\": \"Nahur\",\n           \"bhk_type\": \"2 BHK\",\n           \"book_pri_min\": 16700000,\n           \"book_pri_max\": 16700000,\n           \"p_area\": 1500,\n           \"p_area_unit\": \"sq.ft\",\n           \"p_type\": \"Residential Apartment\"\n       }],\n     },\n     \"errors\": {\n         \"code\": 0,\n         \"msg\": \"success\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/realEstate/propertyMaster/handlers.js",
    "groupTitle": "Property",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UrlNotFound",
            "description": "<p>Url not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"statusCode\": 404,\n     \"status\": \"error\",\n     \"message\": \"Url not found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/properties/count",
    "title": "Request Properties Count",
    "name": "GetPropertyCount",
    "group": "Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "defaultValue": "Mumbai",
            "description": "<p>Name of the city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locality",
            "defaultValue": "Nahur",
            "description": "<p>Name of the locality.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sale_type",
            "defaultValue": "sale|rent|pg",
            "description": "<p>Property that looking for.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "p_type",
            "defaultValue": "Residential Apartment",
            "description": "<p>Property type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "u_price",
            "defaultValue": "16700000",
            "description": "<p>Budget upper range.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "l_price",
            "defaultValue": "15700000",
            "description": "<p>Budget lower range.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results",
            "description": "<p>Response information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.data",
            "description": "<p>Response data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "results.data.count",
            "description": "<p>Properties count.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Error code and message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "errors.code",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errors.msg",
            "description": "<p>Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"results\": {\n         \"data\": {\n             \"count\": 62\n         }\n     },\n     \"errors\": {\n         \"code\": 0,\n         \"msg\": \"success\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/realEstate/propertyMaster/handlers.js",
    "groupTitle": "Property",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UrlNotFound",
            "description": "<p>Url not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"statusCode\": 404,\n     \"status\": \"error\",\n     \"message\": \"Url not found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/properties",
    "title": "Property details for sale and rent.",
    "name": "GetPropertyDetails",
    "group": "Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "p_id",
            "defaultValue": "Nahur",
            "description": "<p>document id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sale_type",
            "defaultValue": "sale|rent",
            "description": "<p>Property that looking for.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results",
            "description": "<p>Response information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "results.data",
            "description": "<p>Response data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.data._id",
            "description": "<p>Properties id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.data.location",
            "description": "<p>Location points.LONG-FIRST,LAT.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Error code and message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "errors.code",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errors.msg",
            "description": "<p>Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK rent\n{\n   \"results\":{\n         \"data\":\n [\n     {\n       \"s_amen\": [],\n       \"p_amen\": [\n           \"3 Wardrobe\",\n           \"4 Fan\",\n           \"1 Exhaust Fan\",\n           \"9 Light\",\n           \"1 Modular Kitchen\",\n           \"4 AC\"\n       ],\n       \"_id\": \"5f11c699e8cca076d40914ae\",\n       \"p_type\": \"Residential Apartment\",\n       \"bhk_type\": \"3 BHK\",\n       \"bath_rm_num\": 3,\n       \"balcony_num\": 0,\n       \"furn_type\": \"Semifurnished\",\n       \"open_park\": 0,\n       \"p_tnt_type\": [\n           \"Family Only\"\n       ],\n       \"avail_frm\": \"2020-07-17T15:39:45.575Z\",\n       \"rent_pri\": 100000,\n       \"p_deposit\": 300000,\n       \"p_main\": null,\n       \"p_brokerage\": 100000,\n       \"p_area\": 1000,\n       \"p_locality\": \"Worli\",\n       \"p_no_flr\": 10,\n       \"p_total_flr\": 41,\n       \"p_age\": \"Wed Jun 17 2020 21:09:45 GMT+0530 (India Standard Time)\",\n       \"posted_on\": \"2020-06-25T18:30:00.000Z\"\n     }\n ]\n },\n  \"errors\": {\n         \"code\": 0,\n         \"msg\": \"success\"\n   }\n}\nHTTP/1.1 200 OK sale\n{\n    \"location\": [],\n    \"_id\": \"5f13d7b4299bf404e1ca83d5\",\n    \"s_name\": \"Atmosphere\",\n    \"p_locality\": \"Nahur\",\n    \"bhk_type\": \"1 BHK\",\n    \"apt_inclusion\": \"1 Bedroom 1 Bathroom\",\n    \"book_pri_min\": 16200000,\n    \"book_pri_max\": 16200000,\n    \"p_area\": 1500,\n    \"p_area_unit\": \"sq.ft\",\n    \"p_total_flr\": 45,\n    \"p_flr_type\": \"Others\",\n    \"avail_frm\": \"2020-07-19T05:18:25.070Z\",\n    \"p_type\": \"Studio Apartment\",\n    \"p_main\": 2000\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/realEstate/propertyMaster/handlers.js",
    "groupTitle": "Property",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UrlNotFound",
            "description": "<p>Url not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"statusCode\": 404,\n     \"status\": \"error\",\n     \"message\": \"Url not found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/properties/advance_filter",
    "title": "filter details api.",
    "name": "GetPropertyFilter",
    "group": "Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "p_id",
            "defaultValue": "Nahur",
            "description": "<p>document id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sale_type",
            "defaultValue": "sale|rent",
            "description": "<p>Property that looking for.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results",
            "description": "<p>Response information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "results.data",
            "description": "<p>Response data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Error code and message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "errors.code",
            "description": "<p>Error code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errors.msg",
            "description": "<p>Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK rent\n  {\n\t   \"results\": {\n\t   \t\"data\": {\n\t   \t\t\"BHK Type\": [{\n\t   \t\t\t\"srch_val\": [\n\t   \t\t\t\t\"1 RK\"\n\t   \t\t\t],\n\t   \t\t\t\"_id\": \"5f0f560aacf5db26ca5b3d06\",\n\t   \t\t\t\"range_unit\": null,\n\t   \t\t\t\"g_id\": 1,\n\t   \t\t\t\"g_nm\": \"BHK Type\",\n\t   \t\t\t\"id\": 1,\n\t   \t\t\t\"nm\": \"1 RK\",\n\t   \t\t\t\"f_type\": \"text\",\n\t   \t\t\t\"min\": null,\n\t   \t\t\t\"max\": null\n\t   \t\t}],\n\t   \t\t\"Budget\": [{\n\t   \t\t\t\"srch_val\": [],\n\t   \t\t\t\"_id\": \"5f0f560bacf5db26ca5b3d0b\",\n\t   \t\t\t\"range_unit\": \"rs\",\n\t   \t\t\t\"g_id\": 2,\n\t   \t\t\t\"g_nm\": \"Budget\",\n\t   \t\t\t\"id\": null,\n\t   \t\t\t\"nm\": \"\",\n\t   \t\t\t\"f_type\": \"range\",\n\t   \t\t\t\"min\": 0,\n\t   \t\t\t\"max\": 20000000\n\t   \t\t}],\n\t   \t\t\"Built-up Area\": [{\n\t   \t\t\t\"srch_val\": [],\n\t   \t\t\t\"_id\": \"5f0f560bacf5db26ca5b3d0d\",\n\t   \t\t\t\"range_unit\": \"sqft\",\n\t   \t\t\t\"g_id\": 4,\n\t   \t\t\t\"g_nm\": \"Built-up Area\",\n\t   \t\t\t\"id\": null,\n\t   \t\t\t\"nm\": \"\",\n\t   \t\t\t\"f_type\": \"range\",\n\t   \t\t\t\"min\": 0,\n\t   \t\t\t\"max\": 500000\n\t   \t\t}]\n\t   \t}\n\t   },\n\t   \"errors\": {\n\t   \t\"code\": 0,\n\t   \t\"msg\": \"success\"\n\t   }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/realEstate/propertyMaster/handlers.js",
    "groupTitle": "Property",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UrlNotFound",
            "description": "<p>Url not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"statusCode\": 404,\n     \"status\": \"error\",\n     \"message\": \"Url not found\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
