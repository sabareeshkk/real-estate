define({ "api": [
  {
    "type": "get",
    "url": "real_estate/properties/csv_upload",
    "title": "download format csv",
    "name": "GetCsvDownload",
    "group": "Property",
    "examples": [
      {
        "title": "Example SALE:",
        "content": "https://myjdapi.justdial.com/real_estate/properties/csv_upload",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sale_type",
            "defaultValue": "sale",
            "description": "<p>sale_type.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/realEstate/propertyMaster/handlers.js",
    "groupTitle": "Property"
  },
  {
    "type": "get",
    "url": "/properties/home",
    "title": "Get Home Page.",
    "name": "GetHome",
    "group": "Property",
    "examples": [
      {
        "title": "HOME:",
        "content": "https://myjdapi.justdial.com/real_estate/properties/home?city=Mumbai&locality=Nahur",
        "type": "curl"
      }
    ],
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
          "content": "   HTTP/1.1 200 OK\n{\n    \"results\": {\n        \"data\": {\n            \"sections\": [\n                {\n                    \"header\": \"TRENDING PROJECTS\",\n                    \"data\": [\n                        {\n                            \"properties\": {\n                                \"l1\": \"4.18 Cr\",\n                                \"l2\": \"4 BHK Independent House/Villa \",\n                                \"l3\": \"Runwal Greens Nahur\",\n                                \"l4\": \"1500 sqft \"\n                            },\n                            \"imgs\": [],\n                            \"jd_comp_info\": {\n                                \"docid\": \"022P5508061\",\n                                \"cmpname\": \"360 Degrees Real Estate Services\",\n                                \"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n                                \"d_rating\": \"3.1\",\n                                \"d_web_review\": \"7\",\n                                \"d_numbers\": [\n                                    \"+(91)-9820093893\",\n                                    \"+(91)-22-26482815\",\n                                    \"+(91)-022-65550360\"\n                                ],\n                                \"trusted\": 0,\n                                \"verified\": 0\n                            },\n                            \"s_name\": \"Runwal Greens\",\n                            \"pr_id\": \"5f13d7b5299bf404e1ca90ac\"\n                        }\n                    ],\n                    \"type\": \"13\"\n                },\n                {\n                    \"header\": \"PROPERTIES FOR SALE IN Nahur\",\n                    \"data\": [\n                        {\n                            \"properties\": {\n                                \"l1\": \"1.62 Cr\",\n                                \"l2\": \"1 BHK Studio Apartment \",\n                                \"l3\": \"Atmosphere Nahur\",\n                                \"l4\": \"1500 sqft \"\n                            },\n                            \"imgs\": [],\n                            \"jd_comp_info\": {\n                                \"docid\": \"022P5508061\",\n                                \"cmpname\": \"360 Degrees Real Estate Services\",\n                                \"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n                                \"d_rating\": \"3.1\",\n                                \"d_web_review\": \"7\",\n                                \"d_numbers\": [\n                                    \"+(91)-9820093893\",\n                                    \"+(91)-22-26482815\",\n                                    \"+(91)-022-65550360\"\n                                ],\n                                \"trusted\": 0,\n                                \"verified\": 0\n                            },\n                            \"s_name\": \"Atmosphere\",\n                            \"pr_id\": \"5f13d7b4299bf404e1ca83d5\"\n                        }\n                    ],\n                    \"type\": \"13\"\n                },\n                {\n                    \"header\": \"PROPERTIES FOR RENT IN Nahur\",\n                    \"data\": [\n                        {\n                            \"properties\": {\n                                \"l1\": \"1.62 Cr\",\n                                \"l2\": \"1 BHK Studio Apartment \",\n                                \"l3\": \"Atmosphere Nahur\",\n                                \"l4\": \"1500 sqft \"\n                            },\n                            \"imgs\": [],\n                            \"jd_comp_info\": {\n                                \"docid\": \"022P5508061\",\n                                \"cmpname\": \"360 Degrees Real Estate Services\",\n                                \"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n                                \"d_rating\": \"3.1\",\n                                \"d_web_review\": \"7\",\n                                \"d_numbers\": [\n                                    \"+(91)-9820093893\",\n                                    \"+(91)-22-26482815\",\n                                    \"+(91)-022-65550360\"\n                                ],\n                                \"trusted\": 0,\n                                \"verified\": 0\n                            },\n                            \"s_name\": \"Atmosphere\",\n                            \"pr_id\": \"5f13d7b4299bf404e1ca83d5\"\n                        }\n                    ],\n                    \"type\": \"13\"\n                },\n                {\n                    \"header\": \"Builders in Nahur\",\n                    \"data\": [\n                        {\n                            \"l3\": \"2/2 projects completed\",\n                            \"l1\": \"http://images.jdmagicbox.com/comp/mumbai/j3/022pxx22.xx22.110521132245.g1j3/catalogue/r-s-property-mumbai-f0a425ubv1.jpg\",\n                            \"l2\": \"R S Property\"\n                        },\n                        {\n                            \"l3\": \"2/2 projects completed\",\n                            \"l1\": \"http://images.jdmagicbox.com/comp/mumbai/n4/022pxx22.xx22.151029122548.j9n4/catalogue/vkm-property-consultant-mumbai-32qgqk7alu.jpg?clr=#4d4d1a\",\n                            \"l2\": \"VKM Property Consultant\"\n                        }\n                    ],\n                    \"type\": \"13\"\n                },\n                {\n                    \"header\": \"Price Trends in Nahur\",\n                    \"data\": [\n                        {\n                            \"year\": 2015,\n                            \"price\": 200000\n                        },\n                        {\n                            \"year\": 2014,\n                            \"price\": 250000\n                        }\n                    ],\n                    \"type\": \"13\"\n                }\n            ]\n        }\n    },\n    \"errors\": {\n        \"code\": 0,\n        \"msg\": \"success\"\n    }\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n   \"results\": {\n        \"data\": []\n    },\n    \"errors\": {\n        \"code\": 4,\n        \"msg\": \"url not found\"\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/real_estate/properties/create",
    "title": "POST PROPERTY SALE|RENT-->OWNER|AGENT",
    "name": "GetPostProperty",
    "group": "Property",
    "examples": [
      {
        "title": "Example SALE:",
        "content": "endpoint: https://myjdapi.justdial.com/real_estate/properties/create\n\nbody:\n  {\n  \t\"posted_by\":\"Owner\",\n  \t\"city\":\"Kochi\",\n  \t\"sale_type\":\"sale\",\n  \t\"p_type\":\"Apartments\",\n  \t\"trn_type\": \"new\",\n  \t\"avail_frm\":\"Ready To Move\",\n  \t\"bhk_type\":\"1 BHK\",\n  \t\"bath_rm_num\": 2,\n  \t\"bl_no\": 1,\n  \t\"furn_type\":\"Furnished\",\n  \t\"cost\":4000000,\n  \t\"p_main\": 2000,\n  \t\"p_area\": 700,\n  \t\"c_area\":  400,\n  \t\"s_name\":\"Atmosphere\",\n  \t\"locality\": \"Vyttila\",\n  \t\"no_flr\":2,\n  \t\"totl_flr\": 45,\n  \t\"loc\":[72.686, 19.045],\n  \t\"imgs\":[{\"url\":\"https://dummy.jpg\", \"cover\": true, \"rm_no\": 1}],\n  \t\"p_facing\": \"North\",\n  \t\"add_rm\":[\"Pooja Room\", \"Study Room\"],\n  \t  \"ovr_lk\": \"Pool\",\n     \"addr\": \"somewhere in the middle of vuttila r\",\n    \"desc\": \"lovely\",\n    \"rera\": \"Yes\",\n    \"p_age\": 10,\n    \"amen_srch\":[],\n    \"id\":\"5f2c03b9ea532737bf833c7c\"\n  }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users ID add after the first request put it on the subsequent request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sale_type",
            "defaultValue": "sale",
            "description": "<p>sale_type.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK rent\n{\n    \"results\": {\n        \"data\": {\n            \"id\": \"5f2c03b9ea532737bf833c7c\"\n        }\n    },\n    \"errors\": {\n        \"code\": 0,\n        \"msg\": \"success\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/realEstate/propertyMaster/handlers.js",
    "groupTitle": "Property"
  },
  {
    "type": "get",
    "url": "/properties/search",
    "title": "Search Properties SALE|RENT|PG.",
    "name": "GetProperties",
    "group": "Property",
    "examples": [
      {
        "title": "RENT:",
        "content": "https://myjdapi.justdial.com/real_estate/properties/search?city=Mumbai&locality=Worli&p_type=Residential Apartment&u_price=1627000000&l_price=100&bhk_type=3 BHK|2 BHK&page=1&limit=10&sale_type=rent",
        "type": "curl"
      },
      {
        "title": "SALE:",
        "content": "https://myjdapi.justdial.com/real_estate/properties/search?city=Mumbai&locality=Nahur&p_type=Studio Apartment&u_price=1627000000&l_price=100&bhk_type=1 BHK|2 BHK&page=1&limit=10&sale_type=sale",
        "type": "curl"
      },
      {
        "title": "PG:",
        "content": "https://myjdapi.justdial.com/real_estate/real_estate/properties/search?city=Delhi&locality=Noida Sector 58&u_price=1627000000&l_price=100&page=1&limit=10&sale_type=pg",
        "type": "curl"
      }
    ],
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
            "description": "<p>pg gender type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "s_name",
            "defaultValue": "Raheja Atlantis",
            "description": "<p>Society name(used to fin similar society  properties)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dlr_id",
            "defaultValue": "0243567",
            "description": "<p>deeloer id(used to find similar develoers property)</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"results\": {\n        \"data\": [\n            {\n                \"properties\": {\n                    \"l1\": \"1.62 Cr\",\n                    \"l2\": \"1 BHK Studio Apartment \",\n                    \"l3\": \"Atmosphere Nahur\",\n                    \"l4\": \"1500 sqft \"\n                },\n                \"imgs\": [],\n                \"jd_comp_info\": {},\n                \"pr_id\": \"5f13d7b4299bf404e1ca83d5\"\n            }\n        ]\n    },\n    \"errors\": {\n        \"code\": 0,\n        \"msg\": \"success\"\n    }\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n   \"results\": {\n        \"data\": []\n    },\n    \"errors\": {\n        \"code\": 4,\n        \"msg\": \"url not found\"\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/properties/count",
    "title": "Properties Count SALE|RENT|PG",
    "name": "GetPropertyCount",
    "group": "Property",
    "examples": [
      {
        "title": "Count:",
        "content": "https://myjdapi.justdial.com/real_estate/properties/count?sale_type=sale&city=Mumbai&locality=Nahur&u_price=16700000&l_price=15700000&p_type=Residential%20Apartment",
        "type": "curl"
      }
    ],
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
          "content": "HTTP/1.1 404 Not Found\n{\n   \"results\": {\n        \"data\": []\n    },\n    \"errors\": {\n        \"code\": 4,\n        \"msg\": \"url not found\"\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/properties",
    "title": "Property Details SALE|PG|RENT.",
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
            "defaultValue": "sale|rent|pg",
            "description": "<p>Property that looking for.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "PG:",
        "content": "https://myjdapi.justdial.com/real_estate/properties?p_id=5f11bb52696c9f731143bba5&sale_type=pg",
        "type": "curl"
      },
      {
        "title": "SALE:",
        "content": "https://myjdapi.justdial.com/real_estate/properties?p_id=5f13d7b4299bf404e1ca83d5&sale_type=sale",
        "type": "curl"
      },
      {
        "title": "RENT:",
        "content": "https://myjdapi.justdial.com/real_estate/properties?p_id=5f11c69ce8cca076d4092da0&sale_type=rent",
        "type": "curl"
      }
    ],
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
          "title": "RENT:",
          "content": "   HTTP/1.1 200 OK rent\n{\n    \"results\": {\n        \"data\": {\n            \"properties\": [\n                \"25000\",\n                \"1 BHK Residential Apartment \",\n                \"Skyline Sparkle Nahur\",\n                \"650 sqft Semifurnished\"\n            ],\n            \"imgs\": [\n                \"https://newprojects.99acres.com/projects/skyline_group/skyline_sparkle/images/2q0x7oe9.jpg\",\n                \"https://newprojects.99acres.com/projects/skyline_group/skyline_sparkle/images/ggvs9m7s.jpg\",\n                \"https://newprojects.99acres.com/projects/skyline_group/skyline_sparkl\"\n            ],\n            \"jd_comp_info\": {},\n            \"pr_id\": \"5f11c69ce8cca076d4092da0\",\n            \"favorite\": false,\n            \"sponsored\": false,\n            \"pg_sections\": {\n                \"1\": [\n                    {\n                        \"header\": \"Overview\",\n                        \"spec\": [\n                            {\n                                \"Project Name\": \"Skyline Sparkle\"\n                            },\n                            {\n                                \"Available From\": \"7th July 2020\"\n                            },\n                            {\n                                \"Bathrooms\": \"]\"\n                            },\n                            {\n                                \"Floor no\": \"7 of 20\"\n                            },\n                            {\n                                \"Furnishing\": \"Semifurnished\"\n                            },\n                            {\n                                \"Tenant Type\": \"Family Only\"\n                            }\n                        ],\n                        \"type\": \"1\"\n                    },\n                    {\n                        \"header\": \"Rent Details\",\n                        \"spec\": [\n                            {\n                                \"Rent\": \"Rs 25000\"\n                            },\n                            {\n                                \"Security Deposit\": \"Rs 150000\"\n                            },\n                            {\n                                \"Maintanance\": \"Rs -\"\n                            },\n                            {\n                                \"Brockerage\": \"Rs 25000\"\n                            }\n                        ],\n                        \"type\": \"1\"\n                    },\n                    {\n                        \"header\": \"Additional Details\",\n                        \"spec\": [\n                            {\n                                \"Posted on\": \"3rd March 2020\"\n                            },\n                            {\n                                \"Last updated \": \"-\"\n                            },\n                            {\n                                \"Balconies\": \"0\"\n                            },\n                            {\n                                \"Age of building\": \"1 to 5 Year Old\"\n                            },\n                            {\n                                \"Parking\": \"0\"\n                            }\n                        ],\n                        \"type\": \"1\"\n                    },\n                    {\n                        \"header\": \"Amenities\",\n                        \"spec\": [\n                            {\n                                \"Lift(s)\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                            },\n                            {\n                                \"Security / Fire Alarm\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                            },\n                            {\n                                \"Park\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                            },\n                            {\n                                \"Visitor Parking\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                            },\n                            {\n                                \"Rain Water Harvesting\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                            }\n                        ],\n                        \"type\": \"3\"\n                    },\n                    {\n                        \"header\": \"Explore Neighbourhood\",\n                        \"spec\": [\n                            {\n                                \"header\": \"HealthCare\",\n                                \"icon\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_hotels_2x.png\",\n                                \"api\": \"https://<category search api>\"\n                            },\n                            {\n                                \"header\": \"Banks\",\n                                \"icon\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_hotels_2x.png\",\n                                \"api\": \"https://<category search api>\"\n                            },\n                            {\n                                \"header\": \"Parks\",\n                                \"icon\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_hotels_2x.png\",\n                                \"api\": \"https://<category search api>\"\n                            }\n                        ],\n                        \"type\": \"5\"\n                    },\n                    {\n                        \"header\": \"About the Property\",\n                        \"spec\": \"A 1 bhk apartment is available for rent in nahur, central mumbai suburbs. This apartment is on the 7th of 20 floors in skyline sparkle. The built-Up area is 650 sq. Ft. The carpet area is 398 sq. Ft. This is semifurnished apartment. The furnishings includ\",\n                        \"type\": \"9\"\n                    },\n                    {\n                        \"header\": \"Rent-o-Meter\",\n                        \"spec\": {\n                            \"min\": 23000,\n                            \"max\": 27000,\n                            \"value\": 25000\n                        },\n                        \"type\": \"10\"\n                    }\n                ],\n                \"2\": [\n                    {\n                        \"header\": \"Contact Agent\",\n                        \"spec\": {\n                            \"api\": \"https://<API to post data>\"\n                        },\n                        \"type\": \"7\"\n                    }\n                ],\n                \"3\": [\n                    {\n                        \"header\": \"Similar Properties to 1 BHK Rentals\",\n                        \"spec\": [\n                            {\n                                \"properties\": [\n                                    \"25000\",\n                                    \"1 BHK Residential Apartment \",\n                                    \"Skyline Sparkle Nahur\",\n                                    \"600 sqft Semifurnished\"\n                                ],\n                                \"imgs\": [\n                                    \"https://newprojects.99acres.com/projects/skyline_group/skyline_sparkle/images/2q0x7oe9.jpg\",\n                                    \"https://newprojects.99acres.com/projects/skyline_group/skyline_sparkle/images/ggvs9m7s.jpg\",\n                                    \"https://newprojects.99acres.com/projects/skyline_group/skyline_sparkl\"\n                                ],\n                                \"jd_comp_info\": {\n                                    \"docid\": \"022PXX22.XX22.151029122548.J9N4\",\n                                    \"cmpname\": \"VKM Property Consultant\",\n                                    \"d_img\": \"http://images.jdmagicbox.com/comp/mumbai/n4/022pxx22.xx22.151029122548.j9n4/catalogue/vkm-property-consultant-mumbai-32qgqk7alu.jpg?clr=#4d4d1a\",\n                                    \"d_rating\": \"0.0\",\n                                    \"d_web_review\": \"0\",\n                                    \"d_numbers\": [\n                                        \"+(91)-8779518261\",\n                                        \"+(91)-9892230529\"\n                                    ],\n                                    \"trusted\": 0,\n                                    \"verified\": 0\n                                },\n                                \"pr_id\": \"5f11c699e8cca076d40917c8\",\n                                \"favorite\": false,\n                                \"sponsored\": false\n                            },\n                            {\n                                \"properties\": [\n                                    \"21500\",\n                                    \"1 BHK Residential Apartment \",\n                                    \"Jeevan Vihar CHS Nahur\",\n                                    \" sqft Semifurnished\"\n                                ],\n                                \"imgs\": [\n                                    \"https://newprojects.99acres.com/projects/unknown/jeevan_vihar_chs/images/53328cdb1f013.jpg\"\n                                ],\n                                \"jd_comp_info\": {\n                                    \"docid\": \"022PXX22.XX22.110521132245.G1J3\",\n                                    \"cmpname\": \"R S Property\",\n                                    \"d_img\": \"http://images.jdmagicbox.com/comp/mumbai/j3/022pxx22.xx22.110521132245.g1j3/catalogue/r-s-property-mumbai-f0a425ubv1.jpg\",\n                                    \"d_rating\": \"3.7\",\n                                    \"d_web_review\": \"34\",\n                                    \"d_numbers\": [\n                                        \"+(91)-9833711161\",\n                                        \"+(91)-9619522007\"\n                                    ],\n                                    \"trusted\": 0,\n                                    \"verified\": 0\n                                },\n                                \"pr_id\": \"5f11c699e8cca076d40918f6\",\n                                \"favorite\": false,\n                                \"sponsored\": false\n                            },\n                            {\n                                \"properties\": [\n                                    \"25000\",\n                                    \"1 BHK Residential Apartment \",\n                                    \"Skyline Sparkle Nahur\",\n                                    \"650 sqft Semifurnished\"\n                                ],\n                                \"imgs\": [\n                                    \"https://newprojects.99acres.com/projects/skyline_group/skyline_sparkle/images/2q0x7oe9.jpg\",\n                                    \"https://newprojects.99acres.com/projects/skyline_group/skyline_sparkle/images/ggvs9m7s.jpg\",\n                                    \"https://newprojects.99acres.com/projects/skyline_group/skyline_sparkl\"\n                                ],\n                                \"jd_comp_info\": {\n                                    \"docid\": \"022P5508061\",\n                                    \"cmpname\": \"360 Degrees Real Estate Services\",\n                                    \"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n                                    \"d_rating\": \"3.1\",\n                                    \"d_web_review\": \"7\",\n                                    \"d_numbers\": [\n                                        \"+(91)-9820093893\",\n                                        \"+(91)-22-26482815\",\n                                        \"+(91)-022-65550360\"\n                                    ],\n                                    \"trusted\": 0,\n                                    \"verified\": 0\n                                },\n                                \"pr_id\": \"5f11c69ce8cca076d4092da0\",\n                                \"favorite\": false,\n                                \"sponsored\": true\n                            },\n                            {\n                                \"properties\": [\n                                    \"9000\",\n                                    \"1 BHK Independent House/Villa \",\n                                    \" Nahur\",\n                                    \"350 sqft Semifurnished\"\n                                ],\n                                \"imgs\": [\n                                    \"https://static.99acres.com/images/under_screening_image.png\",\n                                    \"https://static.99acres.com/images/under_screening_image.png\",\n                                    \"https://static.99acres.com/images/under_screening_image.png\",\n                                    \"https://static.99acres.com/images/under_screening_image.png\",\n                                    \"https:/\"\n                                ],\n                                \"jd_comp_info\": {\n                                    \"docid\": \"022P5508061\",\n                                    \"cmpname\": \"360 Degrees Real Estate Services\",\n                                    \"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n                                    \"d_rating\": \"3.1\",\n                                    \"d_web_review\": \"7\",\n                                    \"d_numbers\": [\n                                        \"+(91)-9820093893\",\n                                        \"+(91)-22-26482815\",\n                                        \"+(91)-022-65550360\"\n                                    ],\n                                    \"trusted\": 0,\n                                    \"verified\": 0\n                                },\n                                \"pr_id\": \"5f11c6a4e8cca076d4095dbe\",\n                                \"favorite\": false,\n                                \"sponsored\": false\n                            },\n                            {\n                                \"properties\": [\n                                    \"18000\",\n                                    \"1 BHK Residential Apartment \",\n                                    \"Prashant Sagar Nahur\",\n                                    \" sqft Semifurnished\"\n                                ],\n                                \"imgs\": [\n                                    \"https://newprojects.99acres.com/projects/unknown/prashant_sagar/images/cwiycwe7.jpg\",\n                                    \"https://newprojects.99acres.com/projects/unknown/prashant_sagar/images/t6nb1cat.jpg\",\n                                    \"https://newprojects.99acres.com/projects/unknown/prashant_sagar/images/k9jw5128.jpg\"\n                                ],\n                                \"jd_comp_info\": {\n                                    \"docid\": \"022P5508061\",\n                                    \"cmpname\": \"360 Degrees Real Estate Services\",\n                                    \"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n                                    \"d_rating\": \"3.1\",\n                                    \"d_web_review\": \"7\",\n                                    \"d_numbers\": [\n                                        \"+(91)-9820093893\",\n                                        \"+(91)-22-26482815\",\n                                        \"+(91)-022-65550360\"\n                                    ],\n                                    \"trusted\": 0,\n                                    \"verified\": 0\n                                },\n                                \"pr_id\": \"5f11c6a5e8cca076d409660c\",\n                                \"favorite\": false,\n                                \"sponsored\": false\n                            },\n                            {\n                                \"properties\": [\n                                    \"22000\",\n                                    \"1 BHK Residential Apartment \",\n                                    \" Nahur\",\n                                    \" sqft Unfurnished\"\n                                ],\n                                \"imgs\": [],\n                                \"jd_comp_info\": {\n                                    \"docid\": \"022P5508061\",\n                                    \"cmpname\": \"360 Degrees Real Estate Services\",\n                                    \"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n                                    \"d_rating\": \"3.1\",\n                                    \"d_web_review\": \"7\",\n                                    \"d_numbers\": [\n                                        \"+(91)-9820093893\",\n                                        \"+(91)-22-26482815\",\n                                        \"+(91)-022-65550360\"\n                                    ],\n                                    \"trusted\": 0,\n                                    \"verified\": 0\n                                },\n                                \"pr_id\": \"5f11c6a6e8cca076d40966c0\",\n                                \"favorite\": false,\n                                \"sponsored\": false\n                            },\n                            {\n                                \"properties\": [\n                                    \"23500\",\n                                    \"1 BHK Residential Apartment \",\n                                    \"Jaydeep Prathamesh View Residency Nahur\",\n                                    \" sqft Semifurnished\"\n                                ],\n                                \"imgs\": [\n                                    \"https://newprojects.99acres.com/projects/jaydeep_group/jaydeep_prathamesh_view_residency/images/nd47p6v6.jpg\",\n                                    \"https://newprojects.99acres.com/projects/jaydeep_group/jaydeep_prathamesh_view_residency/images/94znreb6.png\",\n                                    \"https://newprojects.99acres.com/p\"\n                                ],\n                                \"jd_comp_info\": {\n                                    \"docid\": \"022P5508061\",\n                                    \"cmpname\": \"360 Degrees Real Estate Services\",\n                                    \"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n                                    \"d_rating\": \"3.1\",\n                                    \"d_web_review\": \"7\",\n                                    \"d_numbers\": [\n                                        \"+(91)-9820093893\",\n                                        \"+(91)-22-26482815\",\n                                        \"+(91)-022-65550360\"\n                                    ],\n                                    \"trusted\": 0,\n                                    \"verified\": 0\n                                },\n                                \"pr_id\": \"5f11c6a6e8cca076d4096791\",\n                                \"favorite\": false,\n                                \"sponsored\": false\n                            },\n                            {\n                                \"properties\": [\n                                    \"11000\",\n                                    \"1 BHK Residential Apartment \",\n                                    \" Nahur\",\n                                    \"250 sqft Unfurnished\"\n                                ],\n                                \"imgs\": [],\n                                \"jd_comp_info\": {\n                                    \"docid\": \"022P5508061\",\n                                    \"cmpname\": \"360 Degrees Real Estate Services\",\n                                    \"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n                                    \"d_rating\": \"3.1\",\n                                    \"d_web_review\": \"7\",\n                                    \"d_numbers\": [\n                                        \"+(91)-9820093893\",\n                                        \"+(91)-22-26482815\",\n                                        \"+(91)-022-65550360\"\n                                    ],\n                                    \"trusted\": 0,\n                                    \"verified\": 0\n                                },\n                                \"pr_id\": \"5f11c6a7e8cca076d40971ba\",\n                                \"favorite\": false,\n                                \"sponsored\": false\n                            },\n                            {\n                                \"properties\": [\n                                    \"16500\",\n                                    \"1 BHK Residential Apartment \",\n                                    \"Shree Sai CHS Nahur\",\n                                    \"700 sqft Unfurnished\"\n                                ],\n                                \"imgs\": [\n                                    \"https://newprojects.99acres.com/projects/unknown/shree__sai_chs/images/1.jpg\",\n                                    \"https://newprojects.99acres.com/projects/unknown/shree__sai_chs/images/2.jpg\",\n                                    \"https://mediacdn.99acres.com/media1/10604/18/212098697O-1578379418238.jpeg\",\n                                    \"https://mediacdn.99a\"\n                                ],\n                                \"jd_comp_info\": {\n                                    \"docid\": \"022P5508061\",\n                                    \"cmpname\": \"360 Degrees Real Estate Services\",\n                                    \"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n                                    \"d_rating\": \"3.1\",\n                                    \"d_web_review\": \"7\",\n                                    \"d_numbers\": [\n                                        \"+(91)-9820093893\",\n                                        \"+(91)-22-26482815\",\n                                        \"+(91)-022-65550360\"\n                                    ],\n                                    \"trusted\": 0,\n                                    \"verified\": 0\n                                },\n                                \"pr_id\": \"5f11c6a7e8cca076d409726f\",\n                                \"favorite\": false,\n                                \"sponsored\": false\n                            },\n                            {\n                                \"properties\": [\n                                    \"20000\",\n                                    \"1 BHK Residential Apartment \",\n                                    \"Anand Dham CHS Nahur\",\n                                    \"5005.2135 sqft Unfurnished\"\n                                ],\n                                \"imgs\": [\n                                    \"https://newprojects.99acres.com/projects/unknown/anand_dham_chs/images/ee.jpeg\"\n                                ],\n                                \"jd_comp_info\": {\n                                    \"docid\": \"022P5508061\",\n                                    \"cmpname\": \"360 Degrees Real Estate Services\",\n                                    \"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n                                    \"d_rating\": \"3.1\",\n                                    \"d_web_review\": \"7\",\n                                    \"d_numbers\": [\n                                        \"+(91)-9820093893\",\n                                        \"+(91)-22-26482815\",\n                                        \"+(91)-022-65550360\"\n                                    ],\n                                    \"trusted\": 0,\n                                    \"verified\": 0\n                                },\n                                \"pr_id\": \"5f11c6a7e8cca076d4097533\",\n                                \"favorite\": false,\n                                \"sponsored\": false\n                            }\n                        ],\n                        \"type\": \"13\"\n                    }\n                ]\n            },\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    72.943426,\n                    19.152071\n                ]\n            }\n        }\n    },\n    \"errors\": {\n        \"code\": 0,\n        \"msg\": \"success\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "PG:",
          "content": "   HTTP/1.1 200 OK pg\n{\n    \"results\": {\n        \"data\": {\n            \"properties\": [\n                \"Zolostays Dealer PG\",\n                \" Noida Sector 58\",\n                \"5299 / bed\",\n                [\n                    \"Shared Room\"\n                ]\n            ],\n            \"imgs\": [\n                \"https://mediacdn.99acres.com/media1/11315/1/226301662O-1584510184612.jpeg\",\n                \"https://mediacdn.99acres.com/media1/11315/1/226301664O-1584510185168.jpeg\",\n                \"https://mediacdn.99acres.com/media1/11315/1/226301660O-1584510184358.jpeg\",\n                \"https://mediacdn.99acres.co\"\n            ],\n            \"jd_comp_info\": {},\n            \"pr_id\": \"5f11bb52696c9f731143bba5\",\n            \"gender\": [\n                \"Girls\",\n                \"Boys\"\n            ],\n            \"favorite\": false,\n            \"pg_sections\": {\n                \"1\": [\n                    {\n                        \"header\": \"Overview\",\n                        \"spec\": [\n                            {\n                                \"Total Beds\": \"2\"\n                            },\n                            {\n                                \"Notice Period\": \" Days\"\n                            },\n                            {\n                                \"Parking\": \"\"\n                            }\n                        ],\n                        \"type\": \"1\"\n                    },\n                    {\n                        \"header\": \"Room Offering\",\n                        \"spec\": [\n                            {\n                                \"Rent\": \"Rs 5299 / bed\"\n                            },\n                            {\n                                \"Security Deposit\": \"Rs 5299\"\n                            }\n                        ],\n                        \"type\": \"1\"\n                    },\n                    {\n                        \"header\": \"Additional Details\",\n                        \"spec\": [\n                            \"1 Bed\",\n                            \"1 Wardrobe\",\n                            \"1 Fan\",\n                            \"1 Geyser\",\n                            \"1 Light\",\n                            \"1 Curtains\",\n                            \"1 TV\",\n                            \"\"\n                        ],\n                        \"type\": \"2\"\n                    },\n                    {\n                        \"header\": \"Top Furnishing\",\n                        \"spec\": [\n                            \"1 Water Purifier\",\n                            \"1 Fridge\",\n                            \"1 Sofa\",\n                            \"1 Microwave\",\n                            \"1 Washing Machine\"\n                        ],\n                        \"type\": \"2\"\n                    },\n                    {\n                        \"header\": \"Amenities\",\n                        \"spec\": [\n                            {\n                                \"Water purifier\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                            },\n                            {\n                                \"Security / Fire Alarm\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                            },\n                            {\n                                \"Internet/wi-fi connectivity\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                            },\n                            {\n                                \"Water Storage\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                            },\n                            {\n                                \"Security Personnel\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                            },\n                            {\n                                \"Maintenance Staff\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                            }\n                        ],\n                        \"type\": \"3\"\n                    },\n                    {\n                        \"header\": \"House Rules\",\n                        \"spec\": [\n                            \"Available for student & Working Professionals\"\n                        ],\n                        \"type\": \"4\"\n                    },\n                    {\n                        \"header\": \"Explore Neighbourhood\",\n                        \"spec\": [\n                            {\n                                \"header\": \"HealthCare\",\n                                \"icon\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_hotels_2x.png\",\n                                \"api\": \"https://<category search api>\"\n                            },\n                            {\n                                \"header\": \"Banks\",\n                                \"icon\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_hotels_2x.png\",\n                                \"api\": \"https://<category search api>\"\n                            },\n                            {\n                                \"header\": \"Parks\",\n                                \"icon\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_hotels_2x.png\",\n                                \"api\": \"https://<category search api>\"\n                            }\n                        ],\n                        \"type\": \"5\"\n                    }\n                ],\n                \"2\": [\n                    {\n                        \"header\": \"Contact Agent\",\n                        \"spec\": {\n                            \"api\": \"https://<API to post data>\"\n                        },\n                        \"type\": \"7\"\n                    }\n                ],\n                \"3\": [\n                    {\n                        \"header\": \"Similar Properties to PG\",\n                        \"spec\": [\n                            {\n                                \"properties\": [\n                                    \"Zolostays Dealer PG\",\n                                    \" Noida Sector 58\",\n                                    \"5299 / bed\",\n                                    [\n                                        \"Shared Room\"\n                                    ]\n                                ],\n                                \"imgs\": [\n                                    \"https://mediacdn.99acres.com/media1/11315/1/226301662O-1584510184612.jpeg\",\n                                    \"https://mediacdn.99acres.com/media1/11315/1/226301664O-1584510185168.jpeg\",\n                                    \"https://mediacdn.99acres.com/media1/11315/1/226301660O-1584510184358.jpeg\",\n                                    \"https://mediacdn.99acres.co\"\n                                ],\n                                \"jd_comp_info\": {\n                                    \"docid\": \"022P5508061\",\n                                    \"cmpname\": \"360 Degrees Real Estate Services\",\n                                    \"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n                                    \"d_rating\": \"3.1\",\n                                    \"d_web_review\": \"7\",\n                                    \"d_numbers\": [\n                                        \"+(91)-9820093893\",\n                                        \"+(91)-22-26482815\",\n                                        \"+(91)-022-65550360\"\n                                    ],\n                                    \"trusted\": 0,\n                                    \"verified\": 0\n                                },\n                                \"pr_id\": \"5f11bb52696c9f731143bba5\",\n                                \"gender\": [\n                                    \"Girls\",\n                                    \"Boys\"\n                                ],\n                                \"favorite\": false\n                            }\n                        ],\n                        \"type\": \"8\"\n                    }\n                ]\n            },\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    77.3597194,\n                    28.6067511\n                ]\n            }\n        }\n    },\n    \"errors\": {\n        \"code\": 0,\n        \"msg\": \"success\"\n    }\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n   \"results\": {\n        \"data\": []\n    },\n    \"errors\": {\n        \"code\": 4,\n        \"msg\": \"url not found\"\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/properties/",
    "title": "GET basic and adanced details of post property.",
    "name": "GetPropertyDetails_Create",
    "group": "Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "p_id",
            "defaultValue": "5f11c6e7e8cca076d40b5540",
            "description": "<p>property id for edit details.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "basic details:",
        "content": "https://myjdapi.justdial.com/real_estate/properties/basic_details",
        "type": "curl"
      },
      {
        "title": "edit basic details:",
        "content": "https://myjdapi.justdial.com/real_estate/properties/basic_details?p_id=5f11c6e7e8cca076d40b5540",
        "type": "curl"
      }
    ],
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
          "content": "   HTTP/1.1 200 OK rent\n{\n    \"results\": {\n        \"data\": {\n            \"sale\": {\n                \"basic\": [\n                    {\n                        \"hdr\": \"Property Type\",\n                        \"val\": [\n                            \"Apartments\",\n                            \"House/Villa\",\n                            \"Builder Floor\",\n                            \"Penthouse\",\n                            \"Plot\",\n                            \"Office Space\",\n                            \"Shop/Showroom\"\n                        ],\n                        \"selected\": \"Residential Apartment\",\n                        \"field\": \"p_type\"\n                    },\n                    {\n                        \"hdr\": \"Transaction Type\",\n                        \"val\": [\n                            \"new\",\n                            \"resale\"\n                        ],\n                        \"selected\": null,\n                        \"field\": \"b_sale_type\"\n                    },\n                    {\n                        \"hdr\": \"Construction Status\",\n                        \"val\": [\n                            \"Ready to move\",\n                            \"Under Construction\"\n                        ],\n                        \"selected\": \"2020-07-17T15:41:03.640Z\",\n                        \"field\": \"avail_frm\"\n                    },\n                    {\n                        \"hdr\": \"BHK\",\n                        \"val\": [\n                            \"1 RK\",\n                            \"1 BHK\",\n                            \"2 BHK\",\n                            \"3 BHK\",\n                            \"3+ BHK\"\n                        ],\n                        \"selected\": \"3 BHK\",\n                        \"field\": \"bhk_type\"\n                    },\n                    {\n                        \"hdr\": \"Bathroom\",\n                        \"val\": [\n                            0,\n                            1,\n                            2,\n                            3,\n                            \"3+\"\n                        ],\n                        \"selected\": 3,\n                        \"field\": \"bath_rm_num\"\n                    },\n                    {\n                        \"hdr\": \"Balcony\",\n                        \"val\": [\n                            0,\n                            1,\n                            2,\n                            3,\n                            \"3+\"\n                        ],\n                        \"selected\": null,\n                        \"field\": \"balcony_num\"\n                    },\n                    {\n                        \"hdr\": \"Furnishing Type\",\n                        \"val\": [\n                            \"Unfurnished\",\n                            \"Semi-Furnished\",\n                            \"Furnished\"\n                        ],\n                        \"selected\": \"Semifurnished\",\n                        \"field\": \"furn_type\"\n                    },\n                    {\n                        \"hdr\": \"Covered Parking\",\n                        \"val\": [\n                            0,\n                            1,\n                            2,\n                            3,\n                            \"3+\"\n                        ],\n                        \"selected\": 1,\n                        \"field\": \"closed_park\"\n                    },\n                    {\n                        \"hdr\": \"Open Parking\",\n                        \"val\": [\n                            0,\n                            1,\n                            2,\n                            3,\n                            \"3+\"\n                        ],\n                        \"selected\": null,\n                        \"field\": \"open_park\"\n                    }\n                ],\n                \"advanced\": [\n                    {\n                        \"hdr\": \"Facing\",\n                        \"val\": [\n                            \"North\",\n                            \"East\",\n                            \"West\",\n                            \"South\",\n                            \"North-East\",\n                            \"North-West\",\n                            \"South-East\",\n                            \"South-West\"\n                        ],\n                        \"selected\": \"East\",\n                        \"field\": \"p_facing\"\n                    },\n                    {\n                        \"hdr\": \"Additional Rooms\",\n                        \"val\": [\n                            \"Study Room\",\n                            \"Servant Room\",\n                            \"Pooja Room\",\n                            \"Store Room\"\n                        ],\n                        \"selected\": [],\n                        \"field\": \"p_add_room\"\n                    },\n                    {\n                        \"hdr\": \"Overlooking\",\n                        \"val\": [\n                            \"Pool\",\n                            \"Garden/Park\",\n                            \"Main Road\"\n                        ],\n                        \"selected\": null,\n                        \"field\": \"p_ovr_lk\"\n                    },\n                    {\n                        \"hdr\": \"RERA Registered\",\n                        \"val\": [\n                            \"YES\",\n                            \"NO\",\n                            \"Not Applicable\"\n                        ],\n                        \"selected\": null,\n                        \"field\": \"rera_comp\"\n                    },\n                    {\n                        \"hdr\": \"Amenities\",\n                        \"val\": [\n                            \"intercom\",\n                            \"House Keeping\",\n                            \"Kids Play Area\",\n                            \"Fire Safety\",\n                            \"Security\",\n                            \"Park\",\n                            \"Gym\"\n                        ],\n                        \"selected\": [],\n                        \"field\": \"s_amen\"\n                    }\n                ]\n            },\n            \"rent\": {\n                \"basic\": [\n                    {\n                        \"hdr\": \"Property Type\",\n                        \"val\": [\n                            \"Apartments\",\n                            \"House/Villa\",\n                            \"Builder Floor\",\n                            \"Penthouse\",\n                            \"Plot\",\n                            \"Office Space\",\n                            \"Shop/Showroom\"\n                        ],\n                        \"selected\": \"Residential Apartment\",\n                        \"field\": \"p_type\"\n                    },\n                    {\n                        \"hdr\": \"BHK\",\n                        \"val\": [\n                            \"1 RK\",\n                            \"1 BHK\",\n                            \"2 BHK\",\n                            \"3 BHK\",\n                            \"3+ BHK\"\n                        ],\n                        \"selected\": \"3 BHK\",\n                        \"field\": \"bhk_type\"\n                    },\n                    {\n                        \"hdr\": \"Bathroom\",\n                        \"val\": [\n                            0,\n                            1,\n                            2\n                        ],\n                        \"selected\": 3,\n                        \"field\": \"bath_rm_num\"\n                    },\n                    {\n                        \"hdr\": \"Balcony\",\n                        \"val\": [\n                            0,\n                            1,\n                            2,\n                            3,\n                            \"3+\"\n                        ],\n                        \"selected\": null,\n                        \"field\": \"balcony_num\"\n                    },\n                    {\n                        \"hdr\": \"Furnishing Type\",\n                        \"val\": [\n                            \"Unfurnished\",\n                            \"Semi-Furnished\",\n                            \"Furnished\"\n                        ],\n                        \"selected\": \"Semifurnished\",\n                        \"field\": \"furn_type\"\n                    },\n                    {\n                        \"hdr\": \"Covered Parking\",\n                        \"val\": [\n                            0,\n                            1,\n                            2,\n                            3,\n                            \"3+\"\n                        ],\n                        \"selected\": 1,\n                        \"field\": \"closed_park\"\n                    },\n                    {\n                        \"hdr\": \"Open Parking\",\n                        \"val\": [\n                            0,\n                            1,\n                            2,\n                            3,\n                            \"3+\"\n                        ],\n                        \"selected\": null,\n                        \"field\": \"open_park\"\n                    },\n                    {\n                        \"hdr\": \"Preffered Tenant Type\",\n                        \"val\": [\n                            \"Family\",\n                            \"Company\",\n                            \"Bachelor\"\n                        ],\n                        \"selected\": [\n                            \"Family Only\"\n                        ],\n                        \"field\": \"p_tnt_type\"\n                    }\n                ],\n                \"advanced\": [\n                    {\n                        \"hdr\": \"Facing\",\n                        \"val\": [\n                            \"North\",\n                            \"East\",\n                            \"West\",\n                            \"South\",\n                            \"North-East\",\n                            \"North-West\",\n                            \"South-East\",\n                            \"South-West\"\n                        ],\n                        \"selected\": \"East\",\n                        \"field\": \"p_facing\"\n                    },\n                    {\n                        \"hdr\": \"Additional Rooms\",\n                        \"val\": [\n                            \"Study Room\",\n                            \"Servant Room\",\n                            \"Pooja Room\",\n                            \"Store Room\"\n                        ],\n                        \"selected\": [],\n                        \"field\": \"p_add_room\"\n                    },\n                    {\n                        \"hdr\": \"Overlooking\",\n                        \"val\": [\n                            \"Pool\",\n                            \"Garden/Park\",\n                            \"Main Road\"\n                        ],\n                        \"selected\": null,\n                        \"field\": \"p_ovr_lk\"\n                    },\n                    {\n                        \"hdr\": \"Amenities\",\n                        \"val\": [\n                            \"intercom\",\n                            \"House Keeping\",\n                            \"Kids Play Area\",\n                            \"Fire Safety\",\n                            \"Security\",\n                            \"Park\",\n                            \"Gym\"\n                        ],\n                        \"selected\": [],\n                        \"field\": \"s_amen\"\n                    }\n                ]\n            },\n            \"pg\": {\n                \"basic\": [],\n                \"advanced\": []\n            }\n        }\n    },\n    \"errors\": {\n        \"code\": 0,\n        \"msg\": \"success\"\n    }\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n   \"results\": {\n        \"data\": []\n    },\n    \"errors\": {\n        \"code\": 4,\n        \"msg\": \"url not found\"\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/properties/advance_filter",
    "title": "GET FILTER DETAILS.",
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
    "examples": [
      {
        "title": "sale:",
        "content": "https://myjdapi.justdial.com/real_estate/properties/advance_filter?f_type=buy",
        "type": "curl"
      }
    ],
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
          "content": "HTTP/1.1 404 Not Found\n{\n   \"results\": {\n        \"data\": []\n    },\n    \"errors\": {\n        \"code\": 4,\n        \"msg\": \"url not found\"\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/properties/",
    "title": "GET search society auto complete.",
    "name": "GetSocietySearch",
    "group": "Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "s_name",
            "defaultValue": "At",
            "description": "<p>search string.</p>"
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
            "field": "city",
            "defaultValue": "Mumbai",
            "description": "<p>city name.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "sale:",
        "content": "https://myjdapi.justdial.com/real_estate/properties/society_search?s_name=At&sale_type=sale&city=Mumbai",
        "type": "curl"
      }
    ],
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
          "content": " HTTP/1.1 200 OK rent\n{\n\t\"results\": {\n\t\t\"data\": [{\n\t\t\t\"name\": \"Atlantic Orra\",\n\t\t\t\"l1\": \"Kalyan\",\n\t\t\t\"l2\": 1,\n\t\t\t\"l3\": 7,\n\t\t\t\"loation\": {\n\t\t\t\t\"type\": \"Point\",\n\t\t\t\t\"coordinates\": [\n\t\t\t\t\t73.122196,\n\t\t\t\t\t19.245844\n\t\t\t\t]\n\t\t\t}\n\t\t}]\n\t},\n\t\"errors\": {\n\t\t\"code\": 0,\n\t\t\"msg\": \"success\"\n\t}\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n   \"results\": {\n        \"data\": []\n    },\n    \"errors\": {\n        \"code\": 4,\n        \"msg\": \"url not found\"\n    }\n}",
          "type": "json"
        }
      ]
    }
  }
] });
