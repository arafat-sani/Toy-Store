import React from 'react'
import { format } from 'date-fns'

export const Footer = () => {
  return (
    <div>
<footer className="bg-gray-900 text-gray-200 py-6">
<div className="max-w-6xl mx-auto px-4 text-center">
<h2 className="text-xl font-semibold mb-2">YourBrand</h2>
<p className="text-sm mb-4">Connecting people through simple web solutions.</p>


<div className="flex justify-center gap-4 mb-4">
<a href="/terms" className="hover:underline">Terms & Conditions</a>
<a href="/privacy" className="hover:underline">Privacy Policy</a>
</div>


<div className="flex justify-center gap-4 mb-4">
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
</div>


<p className="text-xs">© {format(new Date(),"EEEE,MMMM MM,yyyy")} YourBrand. All rights reserved.</p>
</div>
</footer>
    </div>
  )
}
