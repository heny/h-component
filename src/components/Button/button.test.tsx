import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Button, { ButtonProps } from "./Button";

const defaultProps: ButtonProps = {
  onClick: jest.fn()
}

let LinkProps: ButtonProps = {
  btnType: 'link',
  size: 'lg',
  disabled: true
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    // 调用到click了
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  })
  it('should render the correct primary button', () => {
    const wrapper = render(<Button {...LinkProps} href="http://www.baidu.com">Link</Button>);
    const element = wrapper.getByText('Link') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-lg btn-link');
    expect(element.disabled).toBeFalsy();
  })
})
