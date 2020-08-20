const { json } = require("body-parser");

const axios = require("axios").default;

const htmlData = `
<hr>

<h4>You can view, comment on, or merge this pull request online at:</h4>
<p>&nbsp;&nbsp;<a href='https://github.com/getmailscript/gpt3-api/pull/24'>https://github.com/getmailscript/gpt3-api/pull/24</a></p>

<h4>Commit Summary</h4>
<ul>
  <li>trello update</li>
  <li>train data merged</li>
  <li>Update new_parser.py</li>
  <li>pipenv</li>
  <li>env</li>
  <li>removed unused files</li>
  <li>Update Parser.md</li>
  <li>Update new_parser.py</li>
  <li>added logs and a test</li>
  <li>update to previous commit (Added logs and tests)</li>
  <li>bug fix</li>
  <li>Updated-database</li>
  <li>Added logs to database</li>
  <li>multimodel</li>
  <li>Merge branch &#39;trello&#39; of https://github.com/getmailscript/gpt3-api into trello</li>
  <li>multimodel</li>
  <li>Update index.js</li>
  <li>formatted</li>
  <li>Merge branch &#39;trello&#39; of https://github.com/getmailscript/gpt3-api into trello</li>
  <li>added utils and python runner</li>
  <li>refactored /parse endpoint</li>
  <li>fixed pythonrunner bug</li>
  <li>Update index.js</li>
  <li>Update servertest.js</li>
  <li>refactored</li>
  <li>working python</li>
  <li>refactored pythonRunner</li>
  <li>Merge branch &#39;refactor-trello&#39; of https://github.com/getmailscript/gpt3-api into refactor-trello</li>
  <li>updated index.js</li>
  <li>all working</li>
  <li>added trello test</li>
  <li>Merge branch &#39;refactor-trello&#39; of https://github.com/getmailscript/gpt3-api into refactor-trello</li>
  <li>updaterTest</li>
  <li>added SubDomains</li>
  <li>Update database.js</li>
  <li>updated database.js</li>
</ul>

<h4>File Changes</h4>
<ul>
  <li>
    <strong>M</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-a084b794bc0759e7a6b77810e01874f2">.gitignore</a>
    (2)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-5b46cfda0ddaed371f52aa24ea2b0b2a">.vscode/settings.json</a>
    (3)
  </li>
  <li>
    <strong>M</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-ded60cda56de299d920c0f402dfe762f">Parser.md</a>
    (23)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-1e61a31bf9b94805f869dc4137ec1885">Pipfile</a>
    (15)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-46bb8405eeb4d8a11deb635f562f7c48">Pipfile.lock</a>
    (185)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-d4813f60031795bcc11085e59b259b62">Py_Demo/Mail_Parser.ipynb</a>
    (163)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-6410ceeafd2ce8929470ad3ff2e7d311">babel.json</a>
    (4)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-c9d55c72ffc53e6843683b213335f96d">parser/__pycache__/converter.cpython-36.pyc</a>
    (0)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-dc41c143dd67cc10e70a9d06ed805e13">parser/__pycache__/converter.cpython-37.pyc</a>
    (0)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-53ccb286ef72110e19dc6149490d820e">parser/__pycache__/converter.cpython-38.pyc</a>
    (0)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-ebdbe9b5c940b3b639263796e46d2bce">parser/__pycache__/gpt.cpython-36.pyc</a>
    (0)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-d51fc218566bc66dfb6ab9cd1bc5f283">parser/__pycache__/gpt_buffer.cpython-36.pyc</a>
    (0)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-064a59664d2c4627218c18d078a4a908">parser/__pycache__/gpt_buffer.cpython-37.pyc</a>
    (0)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-865fb1ef7d6d5afc772be9a418b9112e">parser/__pycache__/gpt_train.cpython-36.pyc</a>
    (0)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-3fb3a7a6118d69c5877570fb77b525f1">parser/__pycache__/gpt_train.cpython-37.pyc</a>
    (0)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-188398da813c2a1076b3e1682f09e8db">parser/buffer_parser.py</a>
    (63)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-56f2a2f4de59eb1d64f4ac6ca8785c70">parser/converter.py</a>
    (46)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-9d988121e9c9af254d05fae718801bf7">parser/gpt.py</a>
    (84)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-ed48493ae52afa1edd8ae4a68611e7ca">parser/gpt_buffer.py</a>
    (101)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-f47b86f26ab250ccd38248e772a44c64">parser/gpt_train.py</a>
    (61)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-7a266357ede4163e421fc5f7da41087a">parser/new_parser.py</a>
    (58)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-cdc2b0787f87113ca3fd3851cdc9ce0b">parser/results/add_email.json</a>
    (1)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-63b7171e895dcd2b262cd49b2cc0a11b">parser/results/email_verify.json</a>
    (1)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-faa46eb2f36f0f807d19f2538cb6a173">parser/results/invite.json</a>
    (1)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-7717ab75f895103928a5aaf789ebc05f">parser/results/inviteTrello.json</a>
    (1)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-80db717e1d6b9f3deb29c9aba4a6128f">parser/results/pass_reset_conf.json</a>
    (1)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-3f85b7d764dea855eb67a7b5435da1e1">parser/test_html/add_email.html</a>
    (10)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-79f55336fa83705e2c7e20323252cdcb">parser/test_html/email_verify.html</a>
    (2663)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-652926dfaa5503650977f4ad8690d356">parser/test_html/first_party_authentication.html</a>
    (12)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-abd441d804704599a722d98fa62aeea2">parser/test_html/invite.html</a>
    (200)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-0c0ed69cde36cfc85155e3a36917ced1">parser/test_html/invite2.html</a>
    (200)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-7c09f358548b71fc92d5eff8b65af6fc">parser/test_html/inviteTrello.html</a>
    (27)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-a916353d1e4f8c78ddfa435143b3df61">parser/test_html/inviteTrello1.html</a>
    (27)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-cc2f504b7e64dacb3257352403f0155b">parser/test_html/pass_reset_conf.html</a>
    (12)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-fa1eeee27acb19616051350170e26afa">parser/test_html/third_party_authenticate.html</a>
    (11)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-0282379eb88818fa7f861c4d249bdb5a">parser/test_html/verify.html</a>
    (16)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-28b9190ac65eb086cec07697b942e71b">parser/train_html/Auth.html</a>
    (11)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-07b152712063569bf50c90564db47f18">parser/train_html/email_added.html</a>
    (10)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-e8e1f585e8c23d57f3c0426c048925d6">parser/train_html/invite1.html</a>
    (201)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-02e6d29314fa94ed636f08a919710d5e">parser/train_html/inviteTrello.html</a>
    (25)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-d58b8d8323aa8e79ed3c6e5f58252a95">parser/train_html/pass_reset_conf.html</a>
    (12)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-cf49289d82f004cace89cd65f3f0bf7a">parser/train_html/verification.html</a>
    (15)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-0d48a48dd20314ccaef380d7b2244c4c">parser/train_html/verify_email.html</a>
    (2663)
  </li>
  <li>
    <strong>M</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-b4ef698db8ca845e5845c4618278f29a">requirements.txt</a>
    (1)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-4b2c27d93d48a71eef17281f70a2eff4">server/.nvmrc</a>
    (1)
  </li>
  <li>
    <strong>M</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-df7067ef738a45d3a8331630f51dca3d">server/__pycache__/converter.cpython-37.pyc</a>
    (0)
  </li>
  <li>
    <strong>M</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-b8c42b1933159bf35128e78930df7f6c">server/__pycache__/converter.cpython-38.pyc</a>
    (0)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-b870b607ce0537d2071e000594883397">server/__pycache__/dataretrieve.cpython-37.pyc</a>
    (0)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-0865fb50216bde2bde25173be727b892">server/__pycache__/dataretrieve.cpython-38.pyc</a>
    (0)
  </li>
  <li>
    <strong>R</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-77dc4c891b457aea307862f8222ab1ff">server/__pycache__/gpt.cpython-37.pyc</a>
    (0)
  </li>
  <li>
    <strong>M</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-f8c44c4c105c8e7e3778aa51a8a1c2ac">server/__pycache__/gpt.cpython-38.pyc</a>
    (0)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-eb79bb249aec85926e5991f6f4983be8">server/__pycache__/gpt_train.cpython-37.pyc</a>
    (0)
  </li>
  <li>
    <strong>M</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-6bea8c4ade20a4a86a434bee443ded41">server/__pycache__/gpt_train.cpython-38.pyc</a>
    (0)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-692542fb7a04110f831332afa01ac5bf">server/bin/__pycache__/converter.cpython-38.pyc</a>
    (0)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-863a67c692de97c3242926f166e5919a">server/bin/__pycache__/dataretrieve.cpython-38.pyc</a>
    (0)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-78a9e8bdb2796b3ec3f90ade90a46243">server/bin/__pycache__/gpt.cpython-38.pyc</a>
    (0)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-7d6872c4006792901d60b4f2d78663ea">server/bin/__pycache__/gpt_train.cpython-38.pyc</a>
    (0)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-977898c7fcb8e1a2dad1152c00de437f">server/bin/converter.py</a>
    (18)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-7d8a2319d185b668d217417e2b998a71">server/bin/dataretrieve.py</a>
    (15)
  </li>
  <li>
    <strong>R</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-79087f87a561d99d1b194f4c4deb2f83">server/bin/gpt.py</a>
    (37)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-b7e19051f94bb21c259c06a5f7e00017">server/bin/gpt_train.py</a>
    (34)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-9ab191c395613f3bbc0ceb240a7982e3">server/bin/new_parser.py</a>
    (140)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-916d508fe6af4c236ff32e398d731174">server/converter.py</a>
    (23)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-d8985c3d57b9f9a0e2a8bc837e470395">server/custom_routes/trello/index.js</a>
    (25)
  </li>
  <li>
    <strong>M</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-c6efe247fcfb3e804d633adf9e09d2d0">server/database.js</a>
    (61)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-fdfb3dc40236dc53da1c7ab7f5916fc8">server/dataretrieve.py</a>
    (13)
  </li>
  <li>
    <strong>M</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-29545dbcb4ec0d698f525a2e28bfada1">server/db/mailTrain.json</a>
    (247)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-9f4e6ba858907393ee8bfd6fdd11c9e1">server/gpt_train.py</a>
    (75)
  </li>
  <li>
    <strong>M</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-0861d6d6b50d7d695344bf2d86d6e5e6">server/index.js</a>
    (81)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-64b2df1d2dcb4202eb78074ea0a115e5">server/new_parser.py</a>
    (51)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-af8fc05a46be54e0b5692f9f95ff3dc4">server/nik.py</a>
    (4)
  </li>
  <li>
    <strong>M</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-cb5a274937f0be3f6bd9f18219ad596b">server/package-lock.json</a>
    (5014)
  </li>
  <li>
    <strong>M</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-d9505df4ce0441b9486ff4a0d2c4d2ec">server/package.json</a>
    (7)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-aefa88529fe8dc600fc0188d86233b0b">server/pythonRunner.js</a>
    (37)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-c3cb4d844643b9cd32db0edb25078d9c">server/servertest.js</a>
    (62)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-314a822f6994958efeedb24519ca62bf">server/startup.bat</a>
    (0)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-a79ee52390d097589b505c7968e8c990">server/test.js</a>
    (220)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-04d817aab1c91ce501b5126eaa7a2544">server/test1.js</a>
    (1)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-f7dbbac1d1370d6299e4602a45a4617a">server/test2.js</a>
    (1)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-da329376f3fa091328df0d962a4ecb95">server/test_html/buildfail2.html</a>
    (17)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-51999618866899318b7f26289af30b24">server/test_html/change_pull.html</a>
    (24)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-626547e5d86b5fece9fddce715a48a4a">server/test_html/email_verify.html</a>
    (2663)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-059146a15ecf17d99b7920524e01ffca">server/test_html/inviteTrello.html</a>
    (27)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-69c855057938343f415b4ee193a016b7">server/test_html/notif11.html</a>
    (62)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-f28041e86525698f59e4922a198d7ce0">server/test_html/notif2.html</a>
    (18)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-7769f97d4b9d86bcce468c9186bd660e">server/test_html/notif8.html</a>
    (41)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-340a8f9887664510ea910891cd5f5802">server/test_html/pass_reset.html</a>
    (26)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-a72fcb3eed06f40280045d03a2e30e7b">server/test_html/pass_reset_conf.html</a>
    (12)
  </li>
  <li>
    <strong>M</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-860f5f9aabfcbfeeae6fce84c341cb11">server/test_html/pull_req.html</a>
    (21)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-e713e0ad6c29f2a9e444acac23625e51">server/test_html/verify.html</a>
    (16)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-4946e197afb3adb3827d18103b215ea7">server/testtrello.js</a>
    (41)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-a1cc41e637cdd4d192af074421faf7d8">server/train_html/Auth.html</a>
    (11)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-0a44288dbd5c777827ba1583049d7a8a">server/train_html/card_change.html</a>
    (605)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-91ad8db642caa3017fa8df900eca042c">server/train_html/email_added.html</a>
    (10)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-a22b6682a1a64ea87f83c1f6f8ab26c0">server/train_html/invite1.html</a>
    (201)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-d56d879b4b42bb4702219c7f4e602eef">server/train_html/inviteTrello.html</a>
    (25)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-5a5b385cb752ffc2e352ec4899c8ef04">server/train_html/pass_reset_conf.html</a>
    (12)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-5c448985548830fe2a21efd2eeeaf35b">server/train_html/pullreq.html</a>
    (46)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-7721674a7e7c42303a6fbfcb3f5ac99b">server/train_html/verification.html</a>
    (15)
  </li>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-605d1089679ea4379fd47b97e9a8d02a">server/train_html/verify_email.html</a>
    (2663)
  </li>
  <li>
    <strong>A</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-ee7d88bdd558c15575f4d4c4d63ff188">server/utils.js</a>
    (15)
  </li>
</ul>

<h4>Patch Links:</h4>
<ul>
  <li><a href='https://github.com/getmailscript/gpt3-api/pull/24.patch'>https://github.com/getmailscript/gpt3-api/pull/24.patch</a></li>
  <li><a href='https://github.com/getmailscript/gpt3-api/pull/24.diff'>https://github.com/getmailscript/gpt3-api/pull/24.diff</a></li>
</ul>

<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you are subscribed to this thread.<br />Reply to this email directly, <a href="https://github.com/getmailscript/gpt3-api/pull/24">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/AAXODSV6DDXO33VYU7HTOSDSBEU4LANCNFSM4QBUNV3Q">unsubscribe</a>.<img src="https://github.com/notifications/beacon/AAXODSRISM35AUED3E2LYMDSBEU4LA5CNFSM4QBUNV32YY3PNVWWK3TUL52HS4DFUVEXG43VMWVGG33NNVSW45C7NFSM4KELPMJA.gif" height="1" width="1" alt="" /></p>
<script type="application/ld+json">[
{
"@context": "http://schema.org",
"@type": "EmailMessage",
"potentialAction": {
"@type": "ViewAction",
"target": "https://github.com/getmailscript/gpt3-api/pull/24",
"url": "https://github.com/getmailscript/gpt3-api/pull/24",
"name": "View Pull Request"
},
"description": "View this Pull Request on GitHub",
"publisher": {
"@type": "Organization",
"name": "GitHub",
"url": "https://github.com"
}
}
]</script>
`;

var jsonData = {
  from: [{ name: "Rahul Das", address: "notification@github.com" }],
  content: htmlData,
  contentType : 'text/html',
  subject: "rahul81 invited you to rahul81/GPT3parser",
};
let stringy = JSON.stringify(jsonData);

axios({
  url: "http://localhost:3200/parse",
  headers: {
    "Content-Type": "application/json",
  },
  data: stringy,
})
  .then((res) => {
    console.log(res.data);
  })
  .catch((e) => console.log(e.message));

