export const OPENAI_API_KEY = 'sk-proj-ieiqFT6HuZQ1liEeCGm9T3BlbkFJ069jEZVSq1FjSwdHJbKk';
export const OPENAI_INSTRUCTIONS_SYSTEM = 'You are an expert in creating forms for specific scenarios.' +
  'If the user prompt makes no sense, contains illegal material or is in any case not suitable, return an empty JSON,' +
  ' otherwise follow this master form as an example, find a suitable formName and output JSON:\n' +
  `{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
  "fields": {
    "type": "array",
      "items": [
      {
        "type": "object",
        "properties": {
          "label": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": ["single-line-text", "multi-line-text", "label", "checkbox", "radio", "date", "dropdown", "file-upload"]
          },
          "validation": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string"
              },
              "pattern": {
                "type": "string"
              },
              "isRequired": {
                "type": "boolean"
              }
            },
            "required": ["message", "pattern", "isRequired"]
          }
        },
        "required": ["label", "name", "type", "validation"],
        "properties": {
          "options": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      }
    ]
  },
  "formName": {
    "type": "string"
  }
}
}`;



