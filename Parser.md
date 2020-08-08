## Dependecies
* openai
* BeautifulSoup4

#### Installing dependencies
```python 
pip install -r requirements.txt
```

## Flow of the code
#### Working of the Parser
1. Parsing of the _HTML_ files into _plain text_ file.
2. Formatting the data to feed into the model with appropriate responses.
3. The formatted data is further sent to the gpt to extract the information from the data in JSON file format.
4. The information is further processed to the server.
```python
python3 new_parser.py -i [Files in parser/test_html]
#Example
python3 new_parser.py -i invite.html
```
