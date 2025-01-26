"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { useState } from "react";
import { Loader2, Upload } from "lucide-react";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  content: z
    .string()
    .min(10, {
      message: "Content must be at least 10 characters.",
    })
    .max(160, {
      message: "Content must be at most 160 characters.",
    }),
  category: z.string({
    required_error: "Please select a category",
  }),
  image: z
    .custom<File | undefined>((file) => {
      if (!file) return true; // Optional field
      const validExtensions = ["image/jpeg", "image/png", "image/jpg"];
      if (!validExtensions.includes(file.type)) return false; // Invalid file type
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) return false; // File too large
      return true;
    }, "Please upload a valid image file (JPG, PNG, JPEG) under 5MB.")
    .optional(),
});

const CreatePostForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      category: "",
      image: undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      console.log(values);
      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className=" w-[90%] md:w-[50%] mx-auto p-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-6 flex flex-col"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Details about your post"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a respective category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Religion">Religion</SelectItem>
                    <SelectItem value="Politics">Politics</SelectItem>
                    <SelectItem value="Sports">Sports</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Health">Health</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">Image</FormLabel>
                <FormControl>
                  <label
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-gray-300 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                    htmlFor="image-upload"
                  >
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <Upload className="w-8 h-8 text-gray-400" />
                      <span className="text-sm text-gray-500">
                        Click to upload an image
                      </span>
                      <span className="text-xs text-gray-500">
                        JPG, PNG, or JPEG (Max 5MB)
                      </span>
                    </div>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/jpeg, image/png, image/jpg"
                      className="hidden"
                      onChange={(event) => {
                        const file = event.target.files?.[0]; // Get the uploaded file
                        field.onChange(file); // Update the form state with the file
                      }}
                    />
                  </label>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <Loader2 className="animate-spin" />}
            {!isLoading && "Create Post"}
            {isLoading && "Creating..."}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default CreatePostForm;
