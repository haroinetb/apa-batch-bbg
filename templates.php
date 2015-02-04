<?php

$dir_path = 'app/scripts/templates';

$new_index_path = $dir_path.'/../../';
if ($handle = opendir($dir_path)) {
    echo "Directory handle: $handle\n";
    echo "Entries:\n";

    $new_html = "";

    /* This is the correct way to loop over the directory. */
    while (false !== ($entry = readdir($handle))) {
        if(!stristr($entry, '.hbs'))continue;
        echo "$entry \n";

        $new_template_name = str_replace('.hbs', '', $entry);


        $filename = "$dir_path/$entry";
        $file_handle = fopen($filename, "r");
        $contents = fread($file_handle, filesize($filename));
        fclose($file_handle);



				$contents = preg_replace('!/\*.*?\*/!s', '', $contents);
				$contents = preg_replace( '/<!--(.*?)-->/' , '' , $contents );
				$contents = preg_replace('/<!--(.|\s)*?-->/', '', $contents);
				$contents = preg_replace('/\n\s*\n/', "\n", $contents);
				


        $new_html .= "


        <script id='template_$new_template_name' type='text/x-handlebars-template'>
          $contents
        </script>\n\n


        ";

    }

    closedir($handle);


    $filename = "$new_index_path/index_template.html";
    $file_handle = fopen($filename, "r");
    $contents = fread($file_handle, filesize($filename));
    fclose($file_handle);
    $new_index_file_content = str_replace('{{TEMPLATES}}', $new_html, $contents);


    $myfile = fopen("$new_index_path/index.html", "w");
    fwrite($myfile, $new_index_file_content);
    fclose($myfile);

}

?>
