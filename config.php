<?php


$iterator = Symfony\Component\Finder\Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('vendor')
    ->exclude('bootstrap')
    ->exclude('node_modules')
    ->exclude('config')
    ->exclude('database')
    ->exclude('storage')
    ->in('tests')
    ->in('app');
$options = [
    'theme'                => 'default',
    'title'                => 'G-Fisio',
    'build_dir'            => __DIR__ . '/sami/build/Documentacion-G-Fisio',
    'cache_dir'            => __DIR__ . '/sami/cache/Documentacion-G-Fisio',
];

$sami = new Sami\Sami($iterator, $options);

return $sami;
