define({ "api": [
  {
    "type": "get",
    "url": "real_estate/properties/csv_upload?sale_type=sale&posted_by=Agent",
    "title": "download format csv",
    "name": "GetCsvDownload",
    "group": "Property",
    "examples": [
      {
        "title": "Example SALE:",
        "content": "https://myjdapi.justdial.com/real_estate/properties/csv_upload?sale_type=sale&posted_by=dealer",
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
          "content": "   HTTP/1.1 200 OK\n{\n\t\"results\": {\n\t\t\"data\": {\n\t\t\t\"sections\": [{\n\t\t\t\t\t\"header\": \"TRENDING PROJECTS\",\n\t\t\t\t\t\"spec\": [{\n\t\t\t\t\t\t\"properties\": [\n\t\t\t\t\t\t\t\"24.00 Cr\",\n\t\t\t\t\t\t\t\"Panchsheel Homes Designer Floors Panchsheel Park Panchsheel Park\",\n\t\t\t\t\t\t\t\"By 360 Degrees Real Estate Services\",\n\t\t\t\t\t\t\t\"1,2,3 BHK Flats\"\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"imgs\": [],\n\t\t\t\t\t\t\"jd_comp_info\": {\n\t\t\t\t\t\t\t\"docid\": \"022P5508061\",\n\t\t\t\t\t\t\t\"cmpname\": \"360 Degrees Real Estate Services\",\n\t\t\t\t\t\t\t\"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n\t\t\t\t\t\t\t\"d_rating\": \"3.1\",\n\t\t\t\t\t\t\t\"d_web_review\": \"7\",\n\t\t\t\t\t\t\t\"d_numbers\": [\n\t\t\t\t\t\t\t\t\"+(91)-9820093893\",\n\t\t\t\t\t\t\t\t\"+(91)-22-26482815\",\n\t\t\t\t\t\t\t\t\"+(91)-022-65550360\"\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\"trusted\": 0,\n\t\t\t\t\t\t\t\"verified\": 0\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"s_name\": \"Panchsheel Homes Designer Floors Panchsheel Park\",\n\t\t\t\t\t\t\"pr_id\": \"5f13d7c8299bf404e1cb994d\"\n\t\t\t\t\t}],\n\t\t\t\t\t\"type\": \"21\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"header\": \"PROPERTIES FOR SALE IN undefined\",\n\t\t\t\t\t\"spec\": [{\n\t\t\t\t\t\t\"properties\": [\n\t\t\t\t\t\t\t\"24.90 Lac\",\n\t\t\t\t\t\t\t\"2 BHK 139.35 sq.ft \",\n\t\t\t\t\t\t\t\"Godrej South Estate Okhla\"\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"imgs\": [],\n\t\t\t\t\t\t\"jd_comp_info\": {\n\t\t\t\t\t\t\t\"docid\": \"022P5508061\",\n\t\t\t\t\t\t\t\"cmpname\": \"360 Degrees Real Estate Services\",\n\t\t\t\t\t\t\t\"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n\t\t\t\t\t\t\t\"d_rating\": \"3.1\",\n\t\t\t\t\t\t\t\"d_web_review\": \"7\",\n\t\t\t\t\t\t\t\"d_numbers\": [\n\t\t\t\t\t\t\t\t\"+(91)-9820093893\",\n\t\t\t\t\t\t\t\t\"+(91)-22-26482815\",\n\t\t\t\t\t\t\t\t\"+(91)-022-65550360\"\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\"trusted\": 0,\n\t\t\t\t\t\t\t\"verified\": 0\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"s_name\": \"Godrej South Estate\",\n\t\t\t\t\t\t\"pr_id\": \"5f13d7c7299bf404e1cb8bc3\",\n\t\t\t\t\t\t\"favorite\": false,\n\t\t\t\t\t\t\"sponsored\": false,\n\t\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\t\"type\": \"Point\",\n\t\t\t\t\t\t\t\"coordinates\": [\n\t\t\t\t\t\t\t\t77.295969,\n\t\t\t\t\t\t\t\t28.558221\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t}\n\t\t\t\t\t}],\n\t\t\t\t\t\"type\": \"13\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"header\": \"\",\n\t\t\t\t\t\"spec\": {\n\t\t\t\t\t\t\"properties\": [\n\t\t\t\t\t\t\t\"24.90 Lac\",\n\t\t\t\t\t\t\t\"Godrej South Estate Okhla\",\n\t\t\t\t\t\t\t\"2 BHK Residential Apartment\"\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"imgs\": [],\n\t\t\t\t\t\t\"jd_comp_info\": {\n\t\t\t\t\t\t\t\"docid\": \"022P5508061\",\n\t\t\t\t\t\t\t\"cmpname\": \"360 Degrees Real Estate Services\",\n\t\t\t\t\t\t\t\"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n\t\t\t\t\t\t\t\"d_rating\": \"3.1\",\n\t\t\t\t\t\t\t\"d_web_review\": \"7\",\n\t\t\t\t\t\t\t\"d_numbers\": [\n\t\t\t\t\t\t\t\t\"+(91)-9820093893\",\n\t\t\t\t\t\t\t\t\"+(91)-22-26482815\",\n\t\t\t\t\t\t\t\t\"+(91)-022-65550360\"\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\"trusted\": 0,\n\t\t\t\t\t\t\t\"verified\": 0\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"pr_id\": \"5f13d7c7299bf404e1cb8bc3\"\n\t\t\t\t\t},\n\t\t\t\t\t\"type\": \"17\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"header\": \"PROPERTIES FOR RENT IN undefined\",\n\t\t\t\t\t\"spec\": [{\n\t\t\t\t\t\t\"properties\": [\n\t\t\t\t\t\t\t\"24.90 Lac\",\n\t\t\t\t\t\t\t\"2 BHK 139.35 sq.ft \",\n\t\t\t\t\t\t\t\"Godrej South Estate Okhla\"\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"imgs\": [],\n\t\t\t\t\t\t\"jd_comp_info\": {\n\t\t\t\t\t\t\t\"docid\": \"022P5508061\",\n\t\t\t\t\t\t\t\"cmpname\": \"360 Degrees Real Estate Services\",\n\t\t\t\t\t\t\t\"d_img\": \"https://images.jdmagicbox.com/def_content/estate_agents_for_residence/default-estate-agents-for-residence-0.jpg?clr=#422424\",\n\t\t\t\t\t\t\t\"d_rating\": \"3.1\",\n\t\t\t\t\t\t\t\"d_web_review\": \"7\",\n\t\t\t\t\t\t\t\"d_numbers\": [\n\t\t\t\t\t\t\t\t\"+(91)-9820093893\",\n\t\t\t\t\t\t\t\t\"+(91)-22-26482815\",\n\t\t\t\t\t\t\t\t\"+(91)-022-65550360\"\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\"trusted\": 0,\n\t\t\t\t\t\t\t\"verified\": 0\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"s_name\": \"Godrej South Estate\",\n\t\t\t\t\t\t\"pr_id\": \"5f13d7c7299bf404e1cb8bc3\",\n\t\t\t\t\t\t\"favorite\": false,\n\t\t\t\t\t\t\"sponsored\": false,\n\t\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\t\"type\": \"Point\",\n\t\t\t\t\t\t\t\"coordinates\": [\n\t\t\t\t\t\t\t\t77.295969,\n\t\t\t\t\t\t\t\t28.558221\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t}\n\t\t\t\t\t}],\n\t\t\t\t\t\"type\": \"13\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"header\": \"LIST YOUR PROPERTY\",\n\t\t\t\t\t\"spec\": \"https://newprojects.99acres.com/projects/lodha_group/the_park/images/o9lm9ffc.jpg\",\n\t\t\t\t\t\"type\": \"22\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"header\": \"Builders in undefined\",\n\t\t\t\t\t\"spec\": [{\n\t\t\t\t\t\t\t\"l3\": \"285/285 projects completed\",\n\t\t\t\t\t\t\t\"l1\": \"http://images.jdmagicbox.com/comp/delhi/m9/011pxx11.xx11.160112145144.r1m9/catalogue/krc-real-estate-pvt-ltd-uday-park-south-extension-2-delhi-property-dealers-19ut191.jpg?clr=#b84747\",\n\t\t\t\t\t\t\t\"l2\": \"KRC Real Estate Pvt Ltd\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"l3\": \"226/226 projects completed\",\n\t\t\t\t\t\t\t\"l1\": \"https://images.jdmagicbox.com/comp/delhi/n1/011pxx11.xx11.110722113843.r6n1/catalogue/gupta-realtors-dwarka-sector-19-delhi-estate-agents-for-commercial-rental-dfd4esiyky.jpg?clr=#404026\",\n\t\t\t\t\t\t\t\"l2\": \"Gupta Realtors\"\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\t\"type\": \"14\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"header\": \"Price Trends in undefined\",\n\t\t\t\t\t\"spec\": [{\n\t\t\t\t\t\t\t\"year\": 2017,\n\t\t\t\t\t\t\t\"price\": 300000\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"year\": 2016,\n\t\t\t\t\t\t\t\"price\": 250000\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"year\": 2015,\n\t\t\t\t\t\t\t\"price\": 230000\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"year\": 2014,\n\t\t\t\t\t\t\t\"price\": 220000\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"year\": 2013,\n\t\t\t\t\t\t\t\"price\": 210000\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\t\"type\": \"15\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"title\": [{\n\t\t\t\t\"header\": \"START NEW SEARCH\",\n\t\t\t\t\"spec\": \"https://newprojects.99acres.com/projects/lodha_group/the_park/images/o9lm9ffc.jpg\",\n\t\t\t\t\"type\": \"23\"\n\t\t\t}]\n\t\t}\n\t},\n\t\"errors\": {\n\t\t\"code\": 0,\n\t\t\"msg\": \"success\"\n\t}\n}",
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
    "url": "/real_estate/properties/listings",
    "title": "EDIT PROPERTY LISTING  SALE|RENT-->OWNER|AGENT",
    "name": "GetListings",
    "group": "Property",
    "examples": [
      {
        "title": "Example BUILDER LISTINGS:",
        "content": "endpoint: https://myjdapi.justdial.com/real_estate/properties/listings?sale_type=sale&posted_by=builder&jduid=9091506011100000112",
        "type": "json"
      },
      {
        "title": "Example SALE- property listing",
        "content": "https://myjdapi.justdial.com/real_estate/properties/listings?jduid=9091506011100000112&sale_type=sale",
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
            "description": "<p>property id of the updating document.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK rent\n[\n            [\n            {\n                \"property\": [\n                    \"Sobha Dream Acres\",\n                    \"Balagere Bangalore\",\n                    \"21 BHK \",\n                    \"37.82 Lac 69.00 Lac\"\n                ],\n                \"img\": [\n                        \"https://www.sobha.com/images/projects/gallery/thumb/153864820820181004.jpg\",\n                        \"https://www.sobha.com/images/projects/gallery/thumb/153864823720181004.jpg\",\n                        \"https://www.sobha.com/images/projects/gallery/thumb/153864825020181004.jpg\",\n                        \"https://www.sobha.com/images/projects/gallery/thumb/153864826120181004.jpg\",\n                        \"https://www.sobha.com/images/projects/gallery/thumb/153864827120181004.jpg\",\n                        \"https://www.sobha.com/static/project/current/Bangalore/sobha-dream-acres/bookonline/images/bookonline/SDA-Photos-2bo.jpg\",\n                        \"https://i.ytimg.com/vi/-WRTy1ylerw/hqdefault.jpg\",\n                        \"https://www.sobha.com/images/projects/thumb/153864575320181004.jpg\",\n                        \"https://www.sobha.com/images/projects/thumb/154089515720181030.jpg\",\n                        \"https://www.sobha.com/static/project/current/Bangalore/sobha-dream-acres/bookonline/images/bookonline/SDA-Photos-3bo.jpg\"\n                ],\n                \"location\": {\n                    \"type\": \"Point\",\n                    \"coordinates\": [\n                        77.737663,\n                        12.939126\n                    ]\n                },\n                \"prj_id\": \"5f5bc913b0c4351be794b393\"\n            }\n        ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/realEstate/propertyMaster/handlers.js",
    "groupTitle": "Property"
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
        "content": "    endpoint: https://myjdapi.justdial.com/real_estate/properties/create\n\n    body:\n{\n\t\"posted_by\":\"Owner\",\n\t\"city\":\"Calicut\",\n\t\"sale_type\":\"sale\",\n\t\"p_type\":\"Apartments\",\n\t\"b_sale_type\":\"new\",\n\t\"avail_frm_desc\":\"Ready To Move\",\n\t\"bhk_type\":\"1 BHK\",\n\t\"bath_rm_num\": 2,\n\t\"balcony_num\": 1,\n\t\"furn_type\":\"Furnished\",\n\t\"closed_park\": 1,\n\t\"open_park\":1,\n\t\"cost\":4000000,\n\t\"p_main\": 2000,\n\t\"p_area\": 700,\n\t\"carpt_area\":  400,\n\t\"s_name\":\"Atmosphere\",\n\t\"locality\": \"Vyttila\",\n\t\"p_no_flr\":2,\n\t\"p_total_flr\": 45,\n\t\"location\":[72.686, 19.045],\n\t\"imgs\":[{\"url\":\"https://dummy.jpg\", \"cover\": true, \"rm_no\": 1}],\n\t\"p_facing\": \"North\",\n\t\"p_add_room\":[\"Pooja Room\", \"Study Room\"],\n\t \"p_ovr_lk\": \"Pool\",\n   \"p_addr\": \"somewhere in the middle of vuttila r\",\n  \"p_desc\": \"lovely\",\n  \"rera_comp\": \"Yes\",\n  \"p_age\": 10,\n  \"s_amen\":[],\n  \"id\": \"5f4de2dfcb0ca9313ed80958\"\n}",
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
            "field": "avail_frm",
            "defaultValue": "1|2-->sale|rent",
            "description": "<p>property availlable from or possesion.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "posted_by",
            "defaultValue": "Dealer",
            "description": "<p>posted by user type.</p>"
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
            "type": "Number",
            "optional": true,
            "field": "bath_rm_num",
            "defaultValue": "1",
            "description": "<p>bathroom number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "p_age",
            "defaultValue": "1",
            "description": "<p>property age.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rera_comp",
            "defaultValue": "Yes|No",
            "description": "<p>RERA compalint avilable.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "p_facing",
            "defaultValue": "North",
            "description": "<p>facing details.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "p_tnt_type",
            "defaultValue": "Family",
            "description": "<p>prefered tenant type.</p>"
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
            "optional": false,
            "field": "s_name",
            "defaultValue": "Lodha",
            "description": "<p>The Park project or society name</p>"
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
        "content": "https://myjdapi.justdial.com/real_estate/properties?p_id=5f439d324347431b105423cc&sale_type=sale",
        "type": "curl"
      },
      {
        "title": "RENT:",
        "content": "https://myjdapi.justdial.com/real_estate/properties?p_id=5f11c699e8cca076d40914ae&sale_type=rent",
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
        "content": "https://myjdapi.justdial.com/real_estate/properties/basic_details?posted_by=Dealer",
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
          "content": "   HTTP/1.1 200 OK rent\n{\n    \"results\": {\n        \"data\": {\n            \"sale\": {\n                \"basic\": [\n                    {\n                        \"hdr\": \"Property Type\",\n                        \"val\": [\n                            \"Apartments\",\n                            \"House/Villa\",\n                            \"Builder Floor\",\n                            \"Penthouse\",\n                            \"Plot\",\n                            \"Office Space\",\n                            \"Shop/Showroom\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"p_type\"\n                    },\n                    {\n                        \"hdr\": \"Transaction Type\",\n                        \"val\": [\n                            \"new\",\n                            \"resale\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"b_sale_type\"\n                    },\n                    {\n                        \"hdr\": \"Construction Status\",\n                        \"val\": [\n                            \"Ready to move\",\n                            \"Under Construction\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"avail_frm_desc\"\n                    },\n                    {\n                        \"hdr\": \"Age of Propeprty\",\n                        \"selected\": \"\",\n                        \"field\": \"p_age\"\n                    },\n                    {\n                        \"hdr\": \"BHK\",\n                        \"val\": [\n                            \"1 RK\",\n                            \"1 BHK\",\n                            \"2 BHK\",\n                            \"3 BHK\",\n                            \"4 BHK\",\n                            \"5 BHK\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"bhk_type\"\n                    },\n                    {\n                        \"hdr\": \"Bathroom\",\n                        \"val\": [\n                            0,\n                            1,\n                            2,\n                            3,\n                            4\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"bath_rm_num\"\n                    },\n                    {\n                        \"hdr\": \"Balcony\",\n                        \"val\": [\n                            0,\n                            1,\n                            2,\n                            3,\n                            4\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"balcony_num\"\n                    },\n                    {\n                        \"hdr\": \"Furnishing Type\",\n                        \"val\": [\n                            \"Unfurnished\",\n                            \"Semi-Furnished\",\n                            \"Furnished\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"furn_type\"\n                    },\n                    {\n                        \"hdr\": \"Covered Parking\",\n                        \"val\": [\n                            0,\n                            1,\n                            2,\n                            3,\n                            4\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"closed_park\"\n                    },\n                    {\n                        \"hdr\": \"Open Parking\",\n                        \"val\": [\n                            0,\n                            1,\n                            2,\n                            3,\n                            4\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"open_park\"\n                    },\n                    {\n                        \"hdr\": \"Cost\",\n                        \"val\": [\n                            1\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"cost\"\n                    },\n                    {\n                        \"hdr\": \"Maintenance charges (per month)\",\n                        \"selected\": \"\",\n                        \"field\": \"p_main\"\n                    },\n                    {\n                        \"hdr\": \"Do you charge brokerage\",\n                        \"val\": [\n                            \"Yes\",\n                            \"No\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"brkg_flag\"\n                    },\n                    {\n                        \"hdr\": \"Brokerage Amount\",\n                        \"val\": [\n                            \"\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"p_brokerage\"\n                    },\n                    {\n                        \"hdr\": \"Built Up Area\",\n                        \"val\": [\n                            \"\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"p_area\"\n                    },\n                    {\n                        \"hdr\": \"Carpet Area\",\n                        \"val\": [\n                            \"\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"carpt_area\"\n                    }\n                ],\n                \"location\": [\n                    {\n                        \"hdr\": \"City\",\n                        \"val\": [\n                            \"\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"city\"\n                    },\n                    {\n                        \"hdr\": \"Building/Project/Society\",\n                        \"val\": [\n                            \"\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"s_name\"\n                    },\n                    {\n                        \"hdr\": \"Locality\",\n                        \"val\": [\n                            \"\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"p_locality\"\n                    },\n                    {\n                        \"hdr\": \"Floor No\",\n                        \"val\": [\n                            \"\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"p_no_flr\"\n                    },\n                    {\n                        \"hdr\": \"Total floors\",\n                        \"val\": [\n                            \"\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"p_total_flr\"\n                    }\n                ],\n                \"images\": [\n                    {\n                        \"hdr\": \"+ Add Photos\",\n                        \"val\": [\n                            \"\"\n                        ],\n                        \"selected\": [],\n                        \"field\": \"img_urls\"\n                    }\n                ],\n                \"advanced\": [\n                    {\n                        \"hdr\": \"Facing\",\n                        \"val\": [\n                            \"North\",\n                            \"East\",\n                            \"West\",\n                            \"South\",\n                            \"North-East\",\n                            \"North-West\",\n                            \"South-East\",\n                            \"South-West\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"p_facing\"\n                    },\n                    {\n                        \"hdr\": \"Additional Rooms\",\n                        \"val\": [\n                            \"Study Room\",\n                            \"Servant Room\",\n                            \"Pooja Room\",\n                            \"Store Room\"\n                        ],\n                        \"selected\": [],\n                        \"field\": \"p_add_room\"\n                    },\n                    {\n                        \"hdr\": \"Overlooking\",\n                        \"val\": [\n                            \"Pool\",\n                            \"Garden/Park\",\n                            \"Main Road\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"p_ovr_lk\"\n                    },\n                    {\n                        \"hdr\": \"RERA Registered\",\n                        \"val\": [\n                            \"YES\",\n                            \"NO\",\n                            \"Not Applicable\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"rera_comp\"\n                    }\n                ],\n                \"aminities\": [\n                    {\n                        \"hdr\": \"Amenities\",\n                        \"val\": [\n                            {\n                                \"fire safety\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/realestate/re_fire.svg\"\n                            },\n                            {\n                                \"security\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/realestate/re_ecurity.svg\"\n                            },\n                            {\n                                \"gas pipeline\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/realestate/re_gaspipeline.svg\"\n                            },\n                            {\n                                \"gym\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/realestate/re_gym.svg\"\n                            },\n                            {\n                                \"house keeping\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/realestate/re_housekeeping.svg\"\n                            },\n                            {\n                                \"intercom\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/realestate/re_intercom.svg\"\n                            },\n                            {\n                                \"kids play area\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/realestate/re_kidsplayarea.svg\"\n                            },\n                            {\n                                \"park\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/realestate/re_park.svg\"\n                            },\n                            {\n                                \"refrigerator\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/realestate/re_refrigerator.svg\"\n                            },\n                            {\n                                \"stove\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/realestate/re_stove.svg\"\n                            },\n                            {\n                                \"television\": \"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/realestate/re_television.svg\"\n                            }\n                        ],\n                        \"selected\": [],\n                        \"field\": \"s_amen\"\n                    }\n                ]\n            },\n            \"rent\": {\n                \"basic\": [\n                    {\n                        \"hdr\": \"Property Type\",\n                        \"val\": [\n                            \"Apartments\",\n                            \"House/Villa\",\n                            \"Builder Floor\",\n                            \"Penthouse\",\n                            \"Plot\",\n                            \"Office Space\",\n                            \"Shop/Showroom\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"p_type\"\n                    },\n                    {\n                        \"hdr\": \"Age of Propeprty\",\n                        \"selected\": \"\",\n                        \"field\": \"p_age\"\n                    },\n                    {\n                        \"hdr\": \"BHK\",\n                        \"val\": [\n                            \"1 RK\",\n                            \"1 BHK\",\n                            \"2 BHK\",\n                            \"3 BHK\",\n                            \"4 BHK\",\n                            \"5 BHK\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"bhk_type\"\n                    },\n                    {\n                        \"hdr\": \"Bathroom\",\n                        \"val\": [\n                            0,\n                            1,\n                            2\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"bath_rm_num\"\n                    },\n                    {\n                        \"hdr\": \"Balcony\",\n                        \"val\": [\n                            0,\n                            1,\n                            2,\n                            3,\n                            4\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"balcony_num\"\n                    },\n                    {\n                        \"hdr\": \"Furnishing Type\",\n                        \"val\": [\n                            \"Unfurnished\",\n                            \"Semi-Furnished\",\n                            \"Furnished\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"furn_type\"\n                    },\n                    {\n                        \"hdr\": \"Covered Parking\",\n                        \"val\": [\n                            0,\n                            1,\n                            2,\n                            3,\n                            4\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"closed_park\"\n                    },\n                    {\n                        \"hdr\": \"Open Parking\",\n                        \"val\": [\n                            0,\n                            1,\n                            2,\n                            3,\n                            4\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"open_park\"\n                    },\n                    {\n                        \"hdr\": \"Preffered Tenant Type\",\n                        \"val\": [\n                            \"Family\",\n                            \"Company\",\n                            \"Bachelor\"\n                        ],\n                        \"selected\": [],\n                        \"field\": \"p_tnt_type\"\n                    },\n                    {\n                        \"hdr\": \"Available From\",\n                        \"selected\": \"\",\n                        \"field\": \"avail_frm\"\n                    },\n                    {\n                        \"hdr\": \"Monthly Rent\",\n                        \"selected\": \"\",\n                        \"field\": \"rent_pri\"\n                    },\n                    {\n                        \"hdr\": \"Do you charge brokerage\",\n                        \"val\": [\n                            \"Yes\",\n                            \"No\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"brkg_flag\"\n                    },\n                    {\n                        \"hdr\": \"Brokerage Amount\",\n                        \"val\": [\n                            \"\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"p_brokerage\"\n                    },\n                    {\n                        \"hdr\": \"Security Deposit\",\n                        \"selected\": \"\",\n                        \"field\": \"p_deposit\"\n                    },\n                    {\n                        \"hdr\": \"Built Up Area\",\n                        \"val\": [\n                            \"\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"p_area\"\n                    },\n                    {\n                        \"hdr\": \"Carpet Area\",\n                        \"val\": [\n                            \"\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"carpt_area\"\n                    }\n                ],\n                \"advanced\": [\n                    {\n                        \"hdr\": \"Facing\",\n                        \"val\": [\n                            \"North\",\n                            \"East\",\n                            \"West\",\n                            \"South\",\n                            \"North-East\",\n                            \"North-West\",\n                            \"South-East\",\n                            \"South-West\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"p_facing\"\n                    },\n                    {\n                        \"hdr\": \"Additional Rooms\",\n                        \"val\": [\n                            \"Study Room\",\n                            \"Servant Room\",\n                            \"Pooja Room\",\n                            \"Store Room\"\n                        ],\n                        \"selected\": [],\n                        \"field\": \"p_add_room\"\n                    },\n                    {\n                        \"hdr\": \"Overlooking\",\n                        \"val\": [\n                            \"Pool\",\n                            \"Garden/Park\",\n                            \"Main Road\"\n                        ],\n                        \"selected\": \"\",\n                        \"field\": \"p_ovr_lk\"\n                    },\n                    {\n                        \"hdr\": \"Amenities\",\n                        \"val\": [\n                            \"intercom\",\n                            \"House Keeping\",\n                            \"Kids Play Area\",\n                            \"Fire Safety\",\n                            \"Security\",\n                            \"Park\",\n                            \"Gym\"\n                        ],\n                        \"selected\": [],\n                        \"field\": \"s_amen\"\n                    }\n                ]\n            },\n            \"pg\": {\n                \"basic\": [],\n                \"advanced\": []\n            }\n        }\n    },\n    \"errors\": {\n        \"code\": 0,\n        \"msg\": \"success\"\n    }\n}",
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
            "field": "city",
            "defaultValue": "Mumbai",
            "description": "<p>city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locality",
            "defaultValue": "Nahur",
            "description": "<p>locality.</p>"
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
            "optional": false,
            "field": "s_name",
            "defaultValue": "Lodha",
            "description": "<p>The Park project or society name</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "sale:",
        "content": "https://myjdapi.justdial.com/real_estate/properties/advance_filter?city=Mumbai&sale_type=sale&locality=Nahur",
        "type": "curl"
      },
      {
        "title": "rent:",
        "content": "https://myjdapi.justdial.com/real_estate/properties/advance_filter?city=Mumbai&sale_type=rent&locality=Nahur",
        "type": "curl"
      },
      {
        "title": "rent:",
        "content": "https://myjdapi.justdial.com/real_estate/properties/advance_filter?city=Delhi&sale_type=pg&locality=Noida Sector 58",
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
          "content": "   HTTP/1.1 200 OK rent\n{\n    \"results\": {\n        \"data\": {\n            \"advance_filter\": [\n                {\n                    \"header\": \"Gender\",\n                    \"spec\": [\n                        \"Boys\",\n                        \"Girls\"\n                    ],\n                    \"field\": \"pg_gender\",\n                    \"type\": \"30\"\n                },\n                {\n                    \"header\": \"Property Type\",\n                    \"spec\": [\n                        \"Serviced Apartments\"\n                    ],\n                    \"field\": \"p_type\",\n                    \"type\": \"30\"\n                },\n                {\n                    \"header\": \"Budget\",\n                    \"spec\": {\n                        \"min\": 5299,\n                        \"max\": 5299\n                    },\n                    \"field\": {\n                        \"min\": \"l_price\",\n                        \"max\": \"u_price\"\n                    },\n                    \"type\": \"31\"\n                },\n                {\n                    \"header\": \"Food Available\",\n                    \"spec\": [\n                        \"Yes\"\n                    ],\n                    \"field\": \"pg_ml_avail\",\n                    \"type\": \"30\"\n                },\n                {\n                    \"header\": \"Brand\",\n                    \"spec\": [\n                        \"Zolostays Dealer PG\"\n                    ],\n                    \"field\": \"pg_name\",\n                    \"type\": \"30\"\n                }\n            ],\n            \"budget\": {\n                \"header\": \"select your Budget\",\n                \"spec\": {\n                    \"min\": 5299,\n                    \"max\": 5299\n                },\n                \"field\": {\n                    \"min\": \"l_price\",\n                    \"max\": \"u_price\"\n                },\n                \"type\": \"31\"\n            }\n        }\n    },\n    \"errors\": {\n        \"code\": 0,\n        \"msg\": \"success\"\n    }\n}",
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
  },
  {
    "type": "put",
    "url": "/real_estate/properties/edit",
    "title": "EDIT PROPERTY SALE|RENT-->OWNER|AGENT",
    "name": "GetUpdateProperty",
    "group": "Property",
    "examples": [
      {
        "title": "Example SALE-UPDATE:",
        "content": "endpoint: https://myjdapi.justdial.com/real_estate/properties/edit\n\nbody:\n  {\n  \t\"posted_by\":\"Owner\",\n  \t\"city\":\"Kochi\",\n  \t\"sale_type\":\"buy\",\n  \t\"p_type\":\"Apartments\",\n  \t\"trn_type\": \"new\",\n  \t\"avail_frm\":\"Ready To Move\",\n  \t\"bhk_type\":\"1 BHK\",\n  \t\"bath_rm_num\": 2,\n  \t\"bl_no\": 1,\n  \t\"furn_type\":\"Furnished\",\n  \t\"cost\":4000000,\n  \t\"p_main\": 2000,\n  \t\"p_area\": 700,\n  \t\"c_area\":  400,\n  \t\"s_name\":\"Atmosphere\",\n  \t\"locality\": \"Vyttila\",\n  \t\"no_flr\":2,\n  \t\"totl_flr\": 45,\n  \t\"loc\":[72.686, 19.045],\n  \t\"imgs\":[{\"url\":\"https://dummy.jpg\", \"cover\": true, \"rm_no\": 1}],\n  \t\"p_facing\": \"North\",\n  \t\"add_rm\":[\"Pooja Room\", \"Study Room\"],\n  \t  \"ovr_lk\": \"Pool\",\n     \"addr\": \"somewhere in the middle of vuttila r\",\n    \"desc\": \"lovely\",\n    \"rera_comp\": \"Yes\",\n    \"p_age\": 10,\n    \"amen_srch\":[],\n    \"id\":\"5f2c03b9ea532737bf833c7c\"\n  }",
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
            "description": "<p>property id of the updating document.</p>"
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
    "type": "post",
    "url": "/real_estate/properties/favorite",
    "title": "",
    "name": "addtoFavorite",
    "group": "Property",
    "examples": [
      {
        "title": "Example Favorite add:",
        "content": "endpoint: https://myjdapi.justdial.com/real_estate/properties/favorite?pr_id=5f5bbe207028ac091dd07879&jduid=5f5bbe207028ac091dd07878&flag=add",
        "type": "json"
      },
      {
        "title": "Example favorite remove:",
        "content": "endpoint: https://myjdapi.justdial.com/real_estate/properties/favorite?pr_id=5f5bbe207028ac091dd07879&jduid=5f5bbe207028ac091dd07878&flag=remove",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK rent\n{\n    \"results\": {\n        \"data\": []\n    },\n    \"errors\": {\n        \"code\": 0,\n        \"msg\": \"success\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/realEstate/propertyMaster/handlers.js",
    "groupTitle": "Property"
  },
  {
    "type": "post",
    "url": "/real_estate/properties/create_builder",
    "title": "CREATE BUILDER PROPERTY",
    "name": "createBuilder",
    "group": "Property",
    "examples": [
      {
        "title": "Example SALE-UPDATE:",
        "content": "endpoint: https://myjdapi.justdial.com/real_estate/properties/create_builder",
        "type": "json"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"posted_by\":\"Builder\",\n\t\"prj_id\":\"5f5b031f553c9ff02e40d4a1\",\n\t\"city\":\"Kochi\",\n\t\"sale_type\":\"sale\",\n\t\"s_name\":\"Sobha Hartland\",\n\t\"p_desc\":\"anything that can be made out to be true is this nothing else\",\n\t\"prj_logo\":\"https://dummy.jpg\",\n\t\"prj_brchr\":\"https://dummy.jpg\",\n\t\"prj_dev\":\"sobha Realty\",\n\t\"rera_reg_no\": \"P52000023225\",\n\t\"ttl_prjt_area\": 40000,\n\t\"opn_area\":20000,\n\t\"avail_frm_desc\":\"Ready To Move\",\n\t\"p_bank_aprv\":[\"HDFC\", \"AXIS\"],\n\t\"configurations\":[{\"id\":\"5f60b210bc6cdd395d6a3081\", \"data\":[{\n\t\"flr_pln\":\"https://dummy.jpg\",\n\t\"bhk_type\": \"1 BHK\",\n\t\"p_area\":1500,\n\t\"carpt_area\":800,\n\t\"base_pri\": 20000,\n\t\"avail_frm\": \"22/05/2021\",\n\t\"p_adv\": [\"youtube\", \"facebook\"],\n\t\"p_add_room\":[\"Study Room\", \"Pooja Room\"],\n\t\"bath_rm_num\": 1,\n\t\"balcony_num\":1\n\t}]}, {\"id\":\"\", \"data\":[{\n\t\"flr_pln\":\"https://dummy.jpg\",\n\t\"bhk_type\": \"2 BHK\",\n\t\"p_area\":1500,\n\t\"carpt_area\":1000,\n\t\"base_pri\": 30000,\n\t\"avail_frm\": \"22/05/2021\",\n\t\"p_adv\": [\"youtube\", \"facebook\"],\n\t\"p_add_room\":[\"Study Room\", \"Pooja Room\"],\n\t\"bath_rm_num\": 1,\n\t\"balcony_num\":1\n\t}]}],\n\t\"b_no_tower\":1,\n\t\"p_total_flr\":40,\n\t\"b_no_units\": 2,\n\t\"location\":[72.86, 19.09],\n\t\"resale_pri\":3000000,\n\t\"p_spec\":\"terminator\",\n\t\"prj_info\":\"its all good\",\n\t\"locality_desc\": \"take care of yourself\",\n\t\"s_amen\":[\"Lifts\", \"Card\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK rent\n{\n    \"results\": {\n        \"data\": {\n            \"prj_id\": \"5f5b031f553c9ff02e40d4a1\"\n        }\n    },\n    \"errors\": {\n        \"code\": 0,\n        \"msg\": \"success\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/realEstate/propertyMaster/handlers.js",
    "groupTitle": "Property"
  },
  {
    "type": "post",
    "url": "/real_estate/properties/csv_upload?sale_type=sale&posted_by=Agent",
    "title": "CSV UPLOAD",
    "name": "csvUpload",
    "group": "Property",
    "examples": [
      {
        "title": "Example CSV-UPLOAD-AGENT:",
        "content": "endpoint: https://myjdapi.justdial.com/real_estate/properties/csv_upload?sale_type=sale&posted_by=dealer",
        "type": "json"
      },
      {
        "title": "Example CSV-UPLOAD-AGENT-SALE:",
        "content": "endpoint: https://myjdapi.justdial.com/real_estate/properties/csv_upload?sale_type=rent&posted_by=dealer",
        "type": "json"
      },
      {
        "title": "Example CSV-UPLOAD-BUILDER:",
        "content": "endpoint: https://myjdapi.justdial.com/real_estate/properties/csv_upload?posted_by=builder",
        "type": "json"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   file: csv \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK rent\n{\n    \"results\": {\n        \"data\": []\n    },\n    \"errors\": {\n        \"code\": 0,\n        \"msg\": \"success\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/realEstate/propertyMaster/handlers.js",
    "groupTitle": "Property"
  }
] });
