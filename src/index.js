import React, {useState} from 'react'
import { createRoot } from 'react-dom/client'
import Index from "./components/BlogRoll/Index"

import './css/index.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
        <Index />
)