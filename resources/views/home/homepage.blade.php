<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--    <meta name="viewport" content="width=device-width,initial-scale=1.0">-->
<!--    <link rel="icon" href="favicon.ico">-->
    <title>Panel de Administracion</title>

    <script>
        // window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        // Shared ID
        gtag('config', 'UA-118965717-3');
        // Vue.js ID
        gtag('config', 'UA-118965717-7');
    </script>

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
<!--    <script>-->
<!--        window.Laravel = { !!json_encode([ 'csrfToken' => csrf_token(), ]) !!};-->
<!--    </script>-->

</head>

<body>
<noscript>
    <strong>We're sorry but this app doesn't work properly without JavaScript enabled. Please enable it to
        continue.</strong>
</noscript>
<div id="app"></div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
