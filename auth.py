import openai

from gpt import GPT
from gpt import Example

gpt_auth = GPT(engine='ada',
               temperature= 0.2,
               max_tokens= 69)

mail1 = '''Date: Sat, 01 Aug 2020 08:50:04 -0700
From: GitHub <noreply@github.com>
To: nikhilm21 <nkmishra0103@gmail.com>
Message-ID: <5f258f2cda68d_57eb16f8211496@github-lowworker-f144ac1.va3-iad.github.net.mail>
Subject: [GitHub] Please verify your device
Mime-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 7bit
X-Auto-Response-Suppress: All

Hey nikhilm21!

A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.

Device: Chrome on Android
Verification code: 324644

If you did not attempt to sign in to your account, your password may be compromised. Visit https://github.com/settings/security to create a new, strong password for your GitHub account.

If you'd like to automatically verify devices in the future, consider enabling two-factor authentication on your account. Visit https://help.github.com/articles/configuring-two-factor-authentication learn about two-factor authentication.

If you decide to enable two-factor authentication, ensure you retain access to one or more account recovery methods. See https://help.github.com/articles/configuring-two-factor-authentication-recovery-methods in the GitHub Help.

Thanks,
The GitHub Team'''

mail2 = '''Date: Sat, 01 Aug 2020 08:50:04 -0700
From: GitHub <noreply@github.com>
To: sahilp04 <sahilp04@gmail.com>
Message-ID: <5f258f2cda68d_57eb16f8211496@github-lowworker-f144ac1.va3-iad.github.net.mail>
Subject: [GitHub] Please verify your device
Mime-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 7bit
X-Auto-Response-Suppress: All

Hey sahilp04!

A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.

Device: Chrome on iPhone
Verification code: 324669

If you did not attempt to sign in to your account, your password may be compromised. Visit https://github.com/settings/security to create a new, strong password for your GitHub account.

If you'd like to automatically verify devices in the future, consider enabling two-factor authentication on your account. Visit https://help.github.com/articles/configuring-two-factor-authentication learn about two-factor authentication.

If you decide to enable two-factor authentication, ensure you retain access to one or more account recovery methods. See https://help.github.com/articles/configuring-two-factor-authentication-recovery-methods in the GitHub Help.

Thanks,
The GitHub Team'''



mail3 = '''Date: Sat, 01 Aug 2020 08:50:04 -0700
From: GitHub <noreply@github.com>
To: nikhilm2 <nkmishra0103@gmail.com>
Message-ID: <5f258f2cda68d_57eb16f8211496@github-lowworker-f144ac1.va3-iad.github.net.mail>
Subject: [GitHub] Please verify your device
Mime-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 7bit
X-Auto-Response-Suppress: All

Hey nikhilm21!

A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.

Device: Chrome on ModiPhone
Verification code: 324644

If you did not attempt to sign in to your account, your password may be compromised. Visit https://github.com/settings/security to create a new, strong password for your GitHub account.

If you'd like to automatically verify devices in the future, consider enabling two-factor authentication on your account. Visit https://help.github.com/articles/configuring-two-factor-authentication learn about two-factor authentication.

If you decide to enable two-factor authentication, ensure you retain access to one or more account recovery methods. See https://help.github.com/articles/configuring-two-factor-authentication-recovery-methods in the GitHub Help.

Thanks,
The GitHub Team'''

mail4 = '''Date: Sat, 01 Aug 2020 08:50:04 -0700
From: GitHub <noreply@github.com>
To: nikhilm2 <gangu@gmail.com>
Message-ID: <5f258f2cda68d_57eb16f8211496@github-lowworker-f144ac1.va3-iad.github.net.mail>
Subject: [GitHub] Please verify your device
Mime-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 7bit
X-Auto-Response-Suppress: All

Hey gangu!

A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.

Device: Chrome on Apple
Verification code: 32211

If you did not attempt to sign in to your account, your password may be compromised. Visit https://github.com/settings/security to create a new, strong password for your GitHub account.

If you'd like to automatically verify devices in the future, consider enabling two-factor authentication on your account. Visit https://help.github.com/articles/configuring-two-factor-authentication learn about two-factor authentication.

If you decide to enable two-factor authentication, ensure you retain access to one or more account recovery methods. See https://help.github.com/articles/configuring-two-factor-authentication-recovery-methods in the GitHub Help.

Thanks,
The GitHub Team'''



gpt_auth.add_example(Example(mail1,'name:nikhilm21\nDevice:Chrome on Android\nVerification code:324644\nlink:https://github.com/settings/security\nfrom:Github Team'))
gpt_auth.add_example(Example(mail1,'name:sahilp04\nDevice:Chrome on iPhone\nVerification code:324669\nlink:https://github.com/settings/security\nfrom:Github Team'))
