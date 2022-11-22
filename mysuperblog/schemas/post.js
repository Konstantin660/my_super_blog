export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    groups: [
        {
            name: 'content',
            title: 'Content',
        },
        {
            name: 'meta',
            title: 'Meta',
        },
    ],
    fields: [
        {
            name: 'meta_title',
            type: 'string',
            title: 'Meta title',
            validation: Rule => Rule.required(),
            group: 'meta',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required(),
            group: 'content',
        },
        {
            name: 'publishedDate',
            type: 'date',
            title: 'Published Date',
            validation: Rule => Rule.required(),
            group: 'content',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            validation: Rule => Rule.required(),
            fields: [{
                name: 'caption',
                type: 'string',
                title: 'Caption',
                options: {
                    isHighlighted: true // <-- make this field easily accessible
                }
            },
            {
                // Editing this field will be hidden behind an "Edit"-button
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
            }],
            group: 'content',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            group: 'content',
            validation: Rule => Rule.required(),
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
            group: 'content',
            validation: Rule => Rule.required(),
        },
        {
            name: 'body',
            title: 'Body content',
            type: 'array',
            group: 'content',
            validation: Rule => Rule.required(),
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                }
            ]
        }
    ]
}