---
title: 'file_get_contents(): SSL operation failed with code 1'
slug: file_get_contents-ssl-operation-failed-with-code-1
date: '2020-02-09'
updated: null
published: false
description: '...'
terms:
    - php
    - howto
---

https://stackoverflow.com/questions/26148701/file-get-contents-ssl-operation-failed-with-code-1-failed-to-enable-crypto

This was an enormously helpful link to find:

http://php.net/manual/en/migration56.openssl.php

An official document describing the changes made to open ssl in PHP 5.6 From here I learned of one more parameter I should have set to false: "verify_peer_name"=>false

Note: This has very significant security implications. Disabling verification potentially permits a MITM attacker to use an invalid certificate to eavesdrop on the requests. While it may be useful to do this in local development, other approaches should be used in production.

So my working code looks like this:

<?php
$arrContextOptions=array(
    "ssl"=>array(
        "verify_peer"=>false,
        "verify_peer_name"=>false,
    ),
);

$response = file_get_contents("https://maps.co.weber.ut.us/arcgis/rest/services/SDE_composite_locator/GeocodeServer/findAddressCandidates?Street=&SingleLine=3042+N+1050+W&outFields=*&outSR=102100&searchExtent=&f=json", false, stream_context_create($arrContextOptions));

echo $response; ?>
