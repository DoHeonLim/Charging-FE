import Layout from '@/components/Layout/Layout';

function Account() {
  return (
    <Layout>
      <div>계정관리 페이지</div>
    </Layout>
  );
}

export default Account;

// import React, { useState }  from 'react';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useFieldArray, useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { Link } from 'react-router-dom';
// import { Button } from '../../components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '../../components/ui/form';
// import { Input } from '../../components/ui/input';
// import { cn } from '../../lib/utils'; 
// import { Separator } from '../../components/ui/separator'; 


// const EmailSchema = z.object({
//   email: z
//     .string()
//     .email({ message: '유효한 이메일 주소를 입력해 주세요.' })
//     .max(100, { message: '이메일 주소는 최대 100자 이하로 입력해 주세요.' }),
// })