export const OPENAI_API_KEY = 'sk-proj-ieiqFT6HuZQ1liEeCGm9T3BlbkFJ069jEZVSq1FjSwdHJbKk'; // This key does not work, obviously
export const OPENAI_INSTRUCTIONS_SYSTEM = 'You are an expert in creating forms for user given scenarios.' +
  'If the user prompt makes no sense, contains illegal material or is in any case not suitable, return an empty JSON,' +
  ' otherwise follow this master form as an example, find a suitable formName and output JSON:\n' +
  `{
  "formName": "Master Form",
  "fields": [
    {
      "label": "Label",
      "name": "label0",
      "type": "label",
      "validation": {
        "message": "Invalid input",
        "pattern": ".*",
        "isRequired": false
      }
    },
    {
      "label": "Single line input",
      "name": "single-line-text1",
      "type": "single-line-text",
      "validation": {
        "message": "Invalid input",
        "pattern": ".*",
        "isRequired": false
      }
    },
    {
      "label": "Password",
      "name": "password2",
      "type": "password",
      "validation": {
        "message": "Invalid input",
        "pattern": ".*",
        "isRequired": false
      }
    },
    {
      "label": "Multi line input",
      "name": "multi-line-text3",
      "type": "multi-line-text",
      "validation": {
        "message": "Invalid input",
        "pattern": ".*",
        "isRequired": false
      }
    },
    {
      "label": "Checkbox",
      "name": "checkbox4",
      "type": "checkbox",
      "options": [
        {
          "_id": "09050c43-7f32-4c1d-a5eb-81dc58740d80",
          "value": "Option 1"
        },
        {
          "_id": "f552c45f-2b8d-425f-8697-9c7e53adf8b8",
          "value": "Option 2"
        },
        {
          "_id": "9b151367-7cc7-4596-b213-19a8139b0264",
          "value": "Option 3"
        }
      ],
      "validation": {
        "message": "Invalid input",
        "pattern": ".*",
        "isRequired": false
      }
    },
    {
      "label": "Radio",
      "name": "radio5",
      "type": "radio",
      "options": [
        {
          "_id": "752db303-a03d-4863-a259-76194f680ad3",
          "value": "Option 1"
        },
        {
          "_id": "3eab1b85-005d-446b-aba0-ceb213088db6",
          "value": "Option 2"
        },
        {
          "_id": "ab0a5b7f-35ab-4151-8191-9921d2863852",
          "value": "Option 3"
        }
      ],
      "validation": {
        "message": "Invalid input",
        "pattern": ".*",
        "isRequired": false
      }
    },
    {
      "label": "Date",
      "name": "date6",
      "type": "date",
      "validation": {
        "message": "Invalid input",
        "pattern": ".*",
        "isRequired": false
      }
    },
    {
      "label": "Dropdown",
      "name": "dropdown7",
      "type": "dropdown",
      "options": [
        {
          "_id": "616c7ea1-835a-4dee-afd3-b61c03d84d66",
          "value": "Option 1"
        },
        {
          "_id": "8facdefb-af7a-454b-96e4-f904a444e2cd",
          "value": "Option 2"
        },
        {
          "_id": "e0a734e7-30dc-4380-848d-caef184ab41c",
          "value": "Option 3"
        }
      ],
      "validation": {
        "message": "Invalid input",
        "pattern": ".*",
        "isRequired": false
      }
    },
    {
      "label": "File upload",
      "name": "file-upload8",
      "type": "file-upload",
      "validation": {
        "message": "Invalid input",
        "pattern": ".*",
        "isRequired": false
      }
    }
  ]
}`
