import React from 'react';
import {Input, Modal } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import FormItem from 'antd/lib/form/FormItem';

export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.RuleListItem>;

export type EditFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.RuleListItem>;
};

const EditForm: React.FC<EditFormProps> = (props) => {
  return (
   <Modal width={640} bodyStyle={{padding:'32px 40px 48px'}} destroyOnClose title="Edit"
   visible={props.updateModalVisible} onCancel={()=>props.onCancel()}
   >
     <ProForm
       initialValues={{...props.values}}
       onFinish={async (values) => {
         await props.onSubmit(values)
     }}
     >
       <ProFormText
         name="id"
         label="id"
         rules={[{ required: true, message: "please enter Id" }]}
       />
       <ProFormText
         name="name"
         label="name"
         rules={[{ required: true, message: 'please enter Name' }]}
       />
       <ProFormText
         name="weekly_expected_hours"
         label="Weekly Expected Hours"
         rules={[{ required: true, message: 'please enter WeeklyExpected Hours' }]}
       />
       <ProFormText
         name="work_base"
         label="Work Base"
         rules={[{ required: true, message: 'please enter Work Base' }]}
       />
       <FormItem style={{ display: 'none' }} name="_id" label={false}>
         <Input type="hidden" />
       </FormItem>
     </ProForm>

   </Modal>
  );
};

export default EditForm;
