import React from 'react';
import glamorous from 'glamorous';

import PostcodeInput from '../input/PostcodeInput';
import Validation from '../Validation';
import Button from '../Button';
import { fieldPropTypes } from '../../propTypes';

const InnerLabel = glamorous.span({
  minWidth: '100px',
  display: 'inline-block',
  textAlign: 'right',
  paddingRight: '20px',
});

const Label = glamorous.label({
  display: 'inline-block',
});

const Row = glamorous.div({
  display: 'inline-block',
});

const PostcodeField = props => (
  <div>
    <Row>
      <Label>
        <InnerLabel>{props.label}</InnerLabel>
        <PostcodeInput {...props.input} />
      </Label>
      <Button onClick={props.buttonOnClick}>{props.buttonLabel}</Button>
    </Row>
    <Validation {...props.meta} />
  </div>);

PostcodeField.propTypes = {
  ...fieldPropTypes,
};

export default PostcodeField;
export { InnerLabel };
