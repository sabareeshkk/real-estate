define({ "api": [
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
          "content": "HTTP/1.1 200 OK rent\n{\n    \"results\": {\n        \"data\": {\n            \"properties\": {\n                \"l1\": \"100000\",\n                \"l2\": \"3 BHK Residential Apartment \",\n                \"l3\": \"Lodha The Park Worli\",\n                \"l4\": \"1000 sqft Semifurnished\"\n            },\n            \"imgs\": [\n                \"https://newprojects.99acres.com/projects/lodha_group/the_park/images/o9lm9ffc.jpg\",\n                \"https://newprojects.99acres.com/projects/lodha_group/the_park/images/53c533mq.jpg\",\n                \"https://newprojects.99acres.com/projects/lodha_group/the_park/images/olhk2wvv.jpg\",\n                \"htt\"\n            ],\n            \"jd_comp_info\": {},\n            \"pr_id\": \"5f11c699e8cca076d40914ae\",\n            \"sections\": [\n                {\n                    \"header\": \"Overview\",\n                    \"spec\": {\n                        \"Project Name\": \"Lodha The Park\",\n                        \"Available From\": \"7th July 2020\",\n                        \"Bathrooms\": \"3\",\n                        \"Floor no\": \"10 of 41\",\n                        \"Furnishing\": \"Semifurnished\",\n                        \"Tenant Type\": \"Family Only\"\n                    },\n                    \"type\": \"1\"\n                },\n                {\n                    \"header\": \"Rent Details\",\n                    \"spec\": {\n                        \"Rent\": \"Rs 100000\",\n                        \"Security Deposit\": \"Rs 300000\",\n                        \"Maintanance\": \"Rs -\",\n                        \"Brockerage\": \"Rs 100000\"\n                    },\n                    \"type\": \"1\"\n                },\n                {\n                    \"header\": \"Additional Details\",\n                    \"spec\": {\n                        \"Posted on\": \"6th June 2020\",\n                        \"Last updated \": \"-\",\n                        \"Balconies\": \"0\",\n                        \"Age of building\": \"0 to 1 Year Old\",\n                        \"Parking\": \"0\"\n                    },\n                    \"type\": \"1\"\n                },\n                {\n                    \"header\": \"Amenities\",\n                    \"spec\": [],\n                    \"type\": \"3\"\n                },\n                {\n                    \"header\": \"Explore Neighbourhood\",\n                    \"spec\": {\n                        \"HealthCare\": {\n                            \"icon\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_hotels_2x.png\",\n                            \"api\": \"https://<category search api>\"\n                        },\n                        \"Banks\": {\n                            \"icon\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_hotels_2x.png\",\n                            \"api\": \"https://<category search api>\"\n                        },\n                        \"Parks\": {\n                            \"icon\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_hotels_2x.png\",\n                            \"api\": \"https://<category search api>\"\n                        }\n                    },\n                    \"type\": \"5\"\n                },\n                {\n                    \"header\": \"About the Property\",\n                    \"spec\": \"Lodha the park, south mumbai's most sought after development, is a 17 acre gated community complex with a 7 acre private park set 70 feet above the ground. Lavish residence with large sized rooms, full-Height floor to ceiling windows to maximise light & v\",\n                    \"type\": 9\n                },\n                {\n                    \"header\": \"Rent-o-Meter\",\n                    \"spec\": {\n                        \"min\": 98000,\n                        \"max\": 102000,\n                        \"value\": 100000\n                    },\n                    \"type\": \"10\"\n                },\n                {\n                    \"header\": \"Contact Agent\",\n                    \"api\": \"https://<API to post data>\",\n                    \"type\": \"7\"\n                },\n                {\n                    \"header\": \"Similar Properties to 1 BHK Rentals\",\n                    data: [\n                     {\n                       \"properties\": {\n                           \"l1\": \"20000\",\n                           \"l2\": \"1 BHK Residential Apartment \",\n                           \"l3\": \"Anand Dham CHS Nahur\",\n                           \"l4\": \"5005.2135 sqft Unfurnished\"\n                       },\n                       \"imgs\": [\n                           \"https://newprojects.99acres.com/projects/unknown/anand_dham_chs/images/ee.jpeg\"\n                       ],\n                       \"jd_comp_info\": {\n                           \"docid\": \"022P5508061\",\n                           \"cmpname\": \"360 Degrees Real Estate Services\",\n                           \"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n                           \"d_rating\": \"3.1\",\n                           \"d_web_review\": \"7\",\n                           \"d_numbers\": [\n                               \"+(91)-9820093893\",\n                               \"+(91)-22-26482815\",\n                               \"+(91)-022-65550360\"\n                           ],\n                           \"trusted\": 0,\n                           \"verified\": 0\n                       },\n                       \"pr_id\": \"5f11c6a7e8cca076d4097533\",\n                       \"favorite\": false,\n                       \"sponsered\": true\n                   }\n                     ],\n                    \"type\": \"8\"\n                }\n            ],\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    72.828829,\n                    19.006108\n                ]\n            }\n        }\n    },\n    \"errors\": {\n        \"code\": 0,\n        \"msg\": \"success\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "PG:",
          "content": "HTTP/1.1 200 OK pg\n{\n    \"results\": {\n        \"data\": {\n            \"properties\": {\n                \"l1\": \"Zolostays Dealer PG\",\n                \"l2\": \"- Noida Sector 58\",\n                \"l3\": \"5299 / bed\",\n                \"l4\": [\n                    \"Shared Room\"\n                ]\n            },\n            \"imgs\": [\n                \"https://mediacdn.99acres.com/media1/11315/1/226301662O-1584510184612.jpeg\",\n                \"https://mediacdn.99acres.com/media1/11315/1/226301664O-1584510185168.jpeg\",\n                \"https://mediacdn.99acres.com/media1/11315/1/226301660O-1584510184358.jpeg\",\n                \"https://mediacdn.99acres.co\"\n            ],\n            \"jd_comp_info\": {},\n            \"pr_id\": \"5f11bb52696c9f731143bba5\",\n            \"gender\": [\n                \"Girls\",\n                \"Boys\"\n            ],\n            \"sections\": [\n                {\n                    \"header\": \"Overview\",\n                    \"spec\": {\n                        \"Total Beds\": \"2\",\n                        \"Notice Period\": \"NA Days\",\n                        \"Parking\": \"NA\"\n                    },\n                    \"type\": \"1\"\n                },\n                {\n                    \"header\": \"Room Offering\",\n                    \"spec\": {\n                        \"Rent\": \"Rs 5299 / bed\",\n                        \"Security Deposit\": \"Rs 5299\"\n                    },\n                    \"type\": \"1\"\n                },\n                {\n                    \"header\": \"Additional Details\",\n                    \"spec\": [\n                        \"1 Bed\",\n                        \"1 Wardrobe\",\n                        \"1 Fan\",\n                        \"1 Geyser\",\n                        \"1 Light\",\n                        \"1 Curtains\",\n                        \"1 TV\",\n                        \"\"\n                    ],\n                    \"type\": \"2\"\n                },\n                {\n                    \"header\": \"Top Furnishing\",\n                    \"spec\": [\n                        \"1 Water Purifier\",\n                        \"1 Fridge\",\n                        \"1 Sofa\",\n                        \"1 Microwave\",\n                        \"1 Washing Machine\"\n                    ],\n                    \"type\": \"2\"\n                },\n                {\n                    \"header\": \"Amenities\",\n                    \"spec\": [\n                        {\n                            \"Water purifier\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                        },\n                        {\n                            \"Security / Fire Alarm\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                        },\n                        {\n                            \"Internet/wi-fi connectivity\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                        },\n                        {\n                            \"Water Storage\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                        },\n                        {\n                            \"Security Personnel\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                        },\n                        {\n                            \"Maintenance Staff\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_tempotravellers_2x.png\"\n                        }\n                    ],\n                    \"type\": \"3\"\n                },\n                {\n                    \"header\": \"House Rules\",\n                    \"spec\": [\n                        \"Available for student & Working Professionals\"\n                    ],\n                    \"type\": \"4\"\n                },\n                {\n                    \"header\": \"Explore Neighbourhood\",\n                    \"spec\": {\n                        \"HealthCare\": {\n                            \"icon\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_hotels_2x.png\",\n                            \"api\": \"https://<category search api>\"\n                        },\n                        \"Banks\": {\n                            \"icon\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_hotels_2x.png\",\n                            \"api\": \"https://<category search api>\"\n                        },\n                        \"Parks\": {\n                            \"icon\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/travel_hotels_2x.png\",\n                            \"api\": \"https://<category search api>\"\n                        }\n                    },\n                    \"type\": \"5\"\n                },\n                {\n                    \"header\": \"Contact Agent\",\n                    \"api\": \"https://<API to post data>\",\n                    \"type\": \"7\"\n                },\n           {\n               \"header\": \"Similar Properties to PG\",\n               \"data\": [\n                   {\n                       \"properties\": {\n                           \"l1\": \"Zolostays Dealer PG\",\n                           \"l2\": \"- Noida Sector 58\",\n                           \"l3\": \"5299 / bed\",\n                           \"l4\": [\n                               \"Shared Room\"\n                           ]\n                       },\n                       \"imgs\": [\n                           \"https://mediacdn.99acres.com/media1/11315/1/226301662O-1584510184612.jpeg\",\n                           \"https://mediacdn.99acres.com/media1/11315/1/226301664O-1584510185168.jpeg\",\n                           \"https://mediacdn.99acres.com/media1/11315/1/226301660O-1584510184358.jpeg\",\n                           \"https://mediacdn.99acres.co\"\n                       ],\n                       \"jd_comp_info\": {\n                           \"docid\": \"022P5508061\",\n                           \"cmpname\": \"360 Degrees Real Estate Services\",\n                           \"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n                           \"d_rating\": \"3.1\",\n                           \"d_web_review\": \"7\",\n                           \"d_numbers\": [\n                               \"+(91)-9820093893\",\n                               \"+(91)-22-26482815\",\n                               \"+(91)-022-65550360\"\n                           ],\n                           \"trusted\": 0,\n                           \"verified\": 0\n                       },\n                       \"pr_id\": \"5f11bb52696c9f731143bba5\",\n                       \"gender\": [\n                           \"Girls\",\n                           \"Boys\"\n                       ],\n                       \"favorite\": false\n                   }\n               ],\n               \"type\": \"13\"\n           }\n            ],\n            \"location\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    77.3597194,\n                    28.6067511\n                ]\n            }\n        }\n    },\n    \"errors\": {\n        \"code\": 0,\n        \"msg\": \"success\"\n    }\n}",
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
        "content": "https://myjdapi.justdial.com//real_estate/properties/advance_filter?f_type=buy",
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
  }
] });
