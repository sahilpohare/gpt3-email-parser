## Setting up the virtual environemnt
Run the following commands in terminal
```
pipenv --python
pipenv install
pipenv shell
cd ./server
```
This will set-up the virtual environment for the file.

## Running the code
1. To start the database run the following command in terminal:
```npm run database```
2. Open another terminal and run the following code:
```pipenv shell
   python new_parser.py -i [files in test_html]
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
