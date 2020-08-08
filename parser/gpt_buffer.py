"""Creates the Example and GPT classes for a user to interface with the OpenAI API."""

import openai

openai.api_key = 'sk-r5uc6is7lzeluGzpT0DOfYjbeJh7s8WPmMyfhngY'
def set_openai_key(key):
    """Sets OpenAI key."""
    openai.api_key = key

class inp():
    """Stores an input, output pair and formats it to prime the model."""

    def __init__(self, inp):
        self.input = inp

    def get_input(self):
        """Returns the input of the example."""
        return self.input

    def format(self):
        """Formats the input, output pair."""
        return f"input: {self.input}\n"

class oup():
    def __init__(self,oup):
        self.output = oup

    def get_output(self):
        return self.output

    def format(self):
        return f"output: {self.output}\n"


class GPT:
    """The main class for a user to interface with the OpenAI API.
    A user can add examples and set parameters of the API request."""

    def __init__(self, engine='davinci',
                 temperature=0.5,
                 max_tokens=100):
        self.inputs = []
        self.outputs = []
        self.engine = engine
        self.temperature = temperature
        self.max_tokens = max_tokens

    def add_input(self, ex):
        """Adds an example to the object. Example must be an instance
        of the Example class."""
        assert isinstance(ex, inp), "Please create an Example object."
        self.inputs.append(ex.format())

    def add_output(self, ex):
        assert isinstance(ex, oup)
        self.outputs.append(ex.format())

    def get_prime_text(self):
        """Formats all examples to prime the model."""
        ins = '\n'.join(self.inputs) + '\n'
        outs = '\n'.join(self.outputs) + '\n'
        return ins + outs

    def get_engine(self):
        """Returns the engine specified for the API."""
        return self.engine

    def get_temperature(self):
        """Returns the temperature specified for the API."""
        return self.temperature

    def get_max_tokens(self):
        """Returns the max tokens specified for the API."""
        return self.max_tokens

    def craft_query(self, prompt):
        """Creates the query for the API request."""
        if type(prompt) == type(list()):
            prompt = '\n\ninput:'.join(prompt)
        else:
            pass
            
        return self.get_prime_text() + "input: " + prompt + "\n\noutput:\n\noutput:"

    def submit_request(self, prompt):
        """Calls the OpenAI API with the specified parameters."""
        response = openai.Completion.create(engine=self.get_engine(),
                                            prompt=self.craft_query(prompt),
                                            max_tokens=self.get_max_tokens(),
                                            temperature=self.get_temperature(),
                                            top_p=1,
                                            n=1,
                                            stream=False,
                                            stop="\ninput:")
        return response

    def get_top_reply(self, prompt):
        """Obtains the best result as returned by the API."""
        response = self.submit_request(prompt)
        return response['choices'][0]['text']

