import React from 'react';
import { IAceEditorProps } from 'react-ace';
import AceEditor from 'react-ace';
import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-sqlserver';

export default function AceEditorWrapper(props: IAceEditorProps) {
  return (
    <AceEditor
      editorProps={props.editorProps}
      focus={props.focus}
      fontSize={props.fontSize}
      highlightActiveLine={false}
      height={props?.height}
      mode={props.mode}
      name={props.name}
      onChange={props.onChange}
      onLoad={props.onLoad}
      onSelectionChange={props.onSelectionChange}
      readOnly={props.readOnly}
      setOptions={props.setOptions}
      showGutter={props.showGutter}
      showPrintMargin={props.showPrintMargin}
      theme={props.theme}
      value={props.value}
      maxLines={props?.maxLines}
      width={props.width}
    />
  );
}
